const mongoose = require("mongoose");
const Group = require("../../models/Group");
const GroupValidator = require("../../validators/admin/GroupValidator");
const CommonHelper = require("../../helpers/CommonHelper");
const ConfigHelper = require("../../helpers/ConfigHelper");

module.exports.getById = function (id) {
  return new Promise(function (resolve, reject) {
    Group.findOne()
      .where({ _id: id })
      .then(function (data, err) {
        resolve(data);
      });
  });
};



module.exports.getGroupByAreaId = function (area_id) {
  return new Promise(function (resolve, reject) {
    if (area_id == "") {
      return resolve([]);
    } else {
      Group.aggregate(
        [
          { $match: { status: 1, area: mongoose.Types.ObjectId(area_id) } },
          {
            $project: {
              _id: 0,
              group_id: "$_id",
              name: "$name",
            },
          },
        ],
        async function (err, data) {
          return resolve(data);
        }
      );
    }
  });
};

module.exports.getGroups = function (req, next) {
  return new Promise(function (resolve, reject) {
    Group.aggregate(
      [
        { $match: { status: 1 } },
        {
          $project: {
            _id: 0,
            group_id: "$_id",
            name: "$name",
          },
        },
      ],
      async function (err, data) {
        return resolve(data);
      }
    );
  });
};

// module.exports.isEmailExists = function (email, _id = false) {
//     return new Promise(function (resolve, reject) {
//         var where = { email: email };
//         if (_id) {
//             where._id = { $ne: _id };
//         }
//         Group.findOne().where(where).then(function (data, err) {
//             if (data)
//                 resolve(true);
//             resolve(false);
//         });
//     });
// };

module.exports.isNameExists = function (name, _id = false) {
  return new Promise(function (resolve, reject) {
    var where = { name: name.toLowerCase() };
    if (_id) {
      where._id = { $ne: _id };
    }
    Group.findOne()
      .where(where)
      .then(function (data, err) {
        if (data) resolve(true);
        resolve(false);
      });
  });
};

module.exports.groupList = async function (req, next) {
  let tz = await ConfigHelper.getConfigValue("tz");
  var sort = CommonHelper.modalSort(req);
  var s_data = {};
  if (req.query.search.value) {
    var regex = new RegExp(req.query.search.value, "i");
    s_data = {
      $or: [
        { name: regex },
        { address: regex },
        { "_state.name": regex },
        { "_city.name": regex },
        { contact_name: regex },
        { email: regex },
      ],
    };
  }
  var project = {
    name: "$name",
    address: "$address",
    contact_name: "$contact_name",
    contact_number: "$contact_number",
    email: "$email",
    state: "$_state.name",
    city: "$_city.name",
    area: "$_area.name",
    status: "$status",
    created_at: "$created_at",
    created_by: "$_created_by.name",
    updated_at: "$updated_at",
    updated_by: "$_updated_by.name",
  };
  Group.aggregate(
    [
      {
        $lookup: {
          from: "users",
          localField: "created_by",
          foreignField: "_id",
          as: "_created_by",
        },
      },
      { $unwind: { path: "$_created_by", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "users",
          localField: "updated_by",
          foreignField: "_id",
          as: "_updated_by",
        },
      },
      { $unwind: { path: "$_updated_by", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "cities",
          localField: "city",
          foreignField: "_id",
          as: "_city",
        },
      },
      { $unwind: { path: "$_city", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "states",
          localField: "state",
          foreignField: "_id",
          as: "_state",
        },
      },
      { $unwind: { path: "$_state", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "areas",
          localField: "area",
          foreignField: "_id",
          as: "_area",
        },
      },
      { $unwind: { path: "$_area", preserveNullAndEmptyArrays: true } },
      { $match: s_data },
      { $sort: sort },
      { $skip: Number(req.query.start) },
      { $limit: Number(req.query.length) },
      { $project: project },
    ],
    async function (err, data) {
      Group.aggregate(
        [
          {
            $lookup: {
              from: "cities",
              localField: "city",
              foreignField: "_id",
              as: "_city",
            },
          },
          { $unwind: { path: "$_city", preserveNullAndEmptyArrays: true } },
          {
            $lookup: {
              from: "states",
              localField: "state",
              foreignField: "_id",
              as: "_state",
            },
          },
          { $unwind: { path: "$_state", preserveNullAndEmptyArrays: true } },
          { $match: s_data },
          { $group: { _id: null, count: { $sum: 1 } } },
        ],
        async function (err, cdata) {
          const count =
            cdata[0] == undefined || cdata[0].count == undefined
              ? 0
              : cdata[0].count;
          var total = await Group.countDocuments();
          if (data.length > 0) {
            let sno = req.query.start;
            await data
              .reduce(function (promiesRes, row, index) {
                return promiesRes.then(function (data_d) {
                  return new Promise(async function (resolve, reject) {
                    row.sno = ++sno;
                    row.name = CommonHelper.camelCase(row.name);
                    row.created_at = moment(row.created_at)
                      .tz(tz)
                      .format("DD/MM/YYYY hh:mm A");
                    row.updated_at = moment(row.updated_at)
                      .tz(tz)
                      .format("DD/MM/YYYY hh:mm A");
                    resolve(row);
                  });
                });
              }, Promise.resolve(null))
              .then(function (arrayOfResults) {
                var ret_data = CommonHelper.paginateData(
                  req,
                  data,
                  count,
                  total
                );
                next(ret_data);
                return;
              });
          } else {
            var ret_data = CommonHelper.paginateData(req, data, count, total);
            next(ret_data);
            return;
          }
        }
      );
    }
  );
};

module.exports.store = async function (req, res, next) {
  const self = this;
  const isValid = GroupValidator.store(req.body);
  if (isValid.fails()) {
    return next({
      status: 2,
      message: CommonHelper.errorsValidate(isValid.errors.errors),
    });
  }
  var isNameExists = await self.isNameExists(req.body.name);
  if (isNameExists) {
    return next({
      status: 2,
      message: { name: trans.lang("message.name_already_exists") },
    });
  }
  const GroupData = new Group({
    name: req.body.name.toLowerCase(),
    address: req.body.address,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    area: req.body.area,
    contact_name: req.body.contact_name,
    contact_number: req.body.contact_number,
    email: req.body.email.trim().toLowerCase(),
    status: 1,
    created_at: moment.utc().valueOf(),
    created_by: req.session.user._id,
    updated_at: moment.utc().valueOf(),
    updated_by: req.session.user._id,
  });
  GroupData.save(function (error, data) {
    if (error) {
      return next({
        status: 0,
        message: trans.lang("message.something_went_wrong"),
      });
    } else {
      return next({
        status: 1,
        message: trans.lang("message.group.add_success"),
      });
    }
  });
};

module.exports.changeStatus = function (req, next) {
  Group.updateOne(
    { _id: req.body.id },
    { status: req.body.status },
    function (err) {
      if (err) {
        return next({
          status: 0,
          message: trans.lang("message.something_went_wrong"),
        });
      } else {
        var mess =
          req.body.status == 1
            ? trans.lang("message.group.success_active")
            : trans.lang("message.group.success_deactive");
        return next({ status: 1, message: mess });
      }
    }
  );
};

module.exports.update = async function (req, res, next) {
  const self = this;
  const isValid = GroupValidator.update(req.body);
  if (isValid.fails()) {
    return next({
      status: 2,
      message: CommonHelper.errorsValidate(isValid.errors.errors),
    });
  }
  var isNameExists = await self.isNameExists(req.body.name, req.body.target);
  if (isNameExists) {
    return next({
      status: 2,
      message: { name: trans.lang("message.name_already_exists") },
    });
  }
  const groupData = {
    name: req.body.name.toLowerCase(),
    address: req.body.address,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    area: req.body.area,
    contact_name: req.body.contact_name,
    contact_number: req.body.contact_number,
    email: req.body.email.trim().toLowerCase(),
    updated_at: moment.utc().valueOf(),
    updated_by: req.session.user._id,
  };
  Group.findOneAndUpdate({ _id: req.body.target }, groupData).then(function (
    data,
    err
  ) {
    if (err) {
      return next({
        status: 0,
        message: trans.lang("message.something_went_wrong"),
      });
    }
    if (!data) {
      return next({
        status: 0,
        message: trans.lang("message.group.not_found"),
      });
    }
    return next({
      status: 1,
      message: trans.lang("message.group.update_success"),
    });
  });
};
