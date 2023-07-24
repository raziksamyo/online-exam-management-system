const CommonHelper = require('./CommonHelper');
const fs = require('fs');

// module.exports.getUserData = function (data) {
//     return new Promise(async function (resolve, reject) {
//         data = JSON.parse(JSON.stringify(data));
//         resp = {};
//         resp.user_id = data._id;
//         resp.country_code = data.country_code;
//         resp.contact_number = data.contact_number;
//         resp.name = (data.name != undefined) ? data.name : '';
//         resolve(resp);
//     });
// }

// /* for user app */
// module.exports.getUserAuthData = function (userData, EmployeeData) {
//     const self = this;
//     return new Promise(async function (resolve, reject) {
//         resp = {};
//         resp.user_id = userData._id;
//         resp.unit_id = EmployeeData.unit;
//         resp.name = userData.name;
//         resp.email = userData.email;
//         resp.country_code = userData.country_code;
//         resp.contact_number = userData.contact_number;
//         resp.lang = userData.lang;
//         resp.state = EmployeeData.state;
//         resp.city = EmployeeData.city;
//         resp.address = EmployeeData.address;
//         resp.pincode = EmployeeData.pincode;
//         resp.id_type = EmployeeData.id_type;
//         resp.id_number = EmployeeData.id_number;
//         resp.is_add_notice = 1;
//         resolve(resp);
//     });
// }

// /* for security app */
// module.exports.getSecurityAuthData = function (userData, EmployeeData, role_name) {
//     const self = this;
//     return new Promise(async function (resolve, reject) {
//         resp = {};
//         resp.user_id = userData._id;
//         resp.unit_id = EmployeeData.unit;
//         resp.name = userData.name;
//         resp.email = userData.email;
//         resp.country_code = userData.country_code;
//         resp.contact_number = userData.contact_number;
//         resp.lang = userData.lang;
//         resp.state = EmployeeData.state;
//         resp.city = EmployeeData.city;
//         resp.address = EmployeeData.address;
//         resp.pincode = EmployeeData.pincode;
//         resp.id_type = EmployeeData.id_type;
//         resp.id_number = EmployeeData.id_number;
//         resp.role_name = role_name;
//         resolve(resp);
//     });
// }

/* for security app */
module.exports.getCompanyAuthData = function (unitCompanyData, userData) {
    const self = this;
    return new Promise(async function (resolve, reject) {
        resp = {};
        resp.name = userData.name ?? '';
        resp.email = userData.email;
        resp.unit_id = userData._id;
        resp.base_id = userData._id;
        resp.country_code = userData.country_code;
        resp.contact_number = userData.contact_number;
        resp.unit_name = await CommonHelper.camelCase(unitCompanyData.name);
        resp.secondary_contact_number = unitCompanyData.contact;
        resp.secondary_email_id = unitCompanyData.email;
        resp.address = unitCompanyData.address;
        resp.pincode = unitCompanyData.pincode;
        resp.latitude = unitCompanyData.latitude;
        resp.longitude = unitCompanyData.longitude;
        resp.activation_date = unitCompanyData.activation_date;
        resp.is_white_labelling = unitCompanyData.white_labelling;
        resp.white_labelling = { name: 'KavachApp', icon: locals.icon };
        if (unitCompanyData.white_labelling == 1 &&
            unitCompanyData.white_labelling_name != undefined && unitCompanyData.white_labelling_name != '' &&
            unitCompanyData.white_labelling_icon != undefined && unitCompanyData.white_labelling_icon != ''
        ) {
            resp.white_labelling.icon = unitCompanyData.white_labelling_icon;
            resp.white_labelling.icon = unitCompanyData.white_labelling_icon;
            resp.white_labelling.white_labelling_icon_base_64 = unitCompanyData.white_labelling_icon_base_64;
        }
        resolve(resp);
    });
}

// /* for security app */
// module.exports.getDriverData = function (driverData) {
//     const self = this;
//     return new Promise(async function (resolve, reject) {
//         resp = {};
//         resp.driver_id = driverData._id;
//         resp.name = driverData.name;
//         resp.mobile = driverData.mobile;
//         resp.avatar = (driverData.avatar != undefined) ? await self.driverAvatar(driverData.avatar) : '';
//         resolve(resp);
//     });
// }

// /* for security app */
// module.exports.getCompanyData = function (unitCompanyData, verticalData, userData, stateData, cityData) {
//     const self = this;
//     return new Promise(async function (resolve, reject) {
//         resp = {};
//         resp.name = unitCompanyData.name;
//         resp.vertical = verticalData.name;
//         resp.primary_contact_name = userData.name;
//         resp.primary_contact_number = userData.contact_number;
//         resp.secondary_contact_number = unitCompanyData.contact;
//         resp.primary_email_id = userData.email;
//         resp.secondary_email_id = unitCompanyData.email;
//         resp.address = unitCompanyData.address;
//         resp.state = stateData.name;
//         resp.city = cityData.name;
//         resp.pincode = unitCompanyData.pincode;
//         resp.activation_date = unitCompanyData.activation_date;
//         resp.white_labelling = unitCompanyData.white_labelling;
//         resp.white_labelling_icon = await self.unitCompanyImage(unitCompanyData.white_labelling_icon);
//         resp.white_labelling_name = unitCompanyData.white_labelling_name;
//         resp.requirement = unitCompanyData.requirement;
//         resp.requirement_url = unitCompanyData.requirement_url;
//         resp.requirement_username = unitCompanyData.requirement_username;
//         resp.requirement_password = unitCompanyData.requirement_password;
//         resolve(resp);
//     });
// }

// /* for security app */
// module.exports.getEmployeeData = function (EmployeeData, userData, vendorData, departmentData,
//     sectionData, userTypeData, categoryData, subCategoryData) {
//     const self = this;
//     return new Promise(async function (resolve, reject) {
//         let tz = await ConfigHelper.getConfigValue('tz');
//         resp = {};
//         resp.user_id = userData._id;
//         resp.country_code = userData.country_code;
//         resp.contact_number = userData.contact_number;
//         resp.email = userData.email;
//         resp.passcode = userData.passcode;
//         resp.name = userData.name;
//         resp.avatar = (userData.avatar != undefined) ? await self.userAvatar(userData.avatar) : '';
//         resp.valid_upto = (userData.valid_upto != undefined) ? moment(userData.valid_upto).tz(tz).format("DD-MM-YYYY") : "";
//         resp.shift = (EmployeeData.shift != undefined) ? EmployeeData.shift : "";
//         resp.shift_start = (EmployeeData.shift_start != undefined) ? moment(EmployeeData.shift_start).tz(tz).format("hh:mm A") : "";
//         resp.shift_end = (EmployeeData.shift_end != undefined) ? moment(EmployeeData.shift_end).tz(tz).format("hh:mm A") : "";
//         resp.id_type = (EmployeeData.id_type != undefined) ? EmployeeData.id_type : "";
//         resp.id_number = (EmployeeData.id_number != undefined) ? EmployeeData.id_number : "";
//         resp.blood_group = (EmployeeData.blood_group != undefined) ? EmployeeData.blood_group : "";
//         resp.vehicle_number = (EmployeeData.vehicle_number != undefined) ? EmployeeData.vehicle_number : "";
//         resp.emergency_number = (EmployeeData.emergency_number != undefined) ? EmployeeData.emergency_number : "";
//         resp.vehicle_number = (EmployeeData.vehicle_number != undefined) ? EmployeeData.vehicle_number : "";
//         resp.poc_name = (EmployeeData.poc_name != undefined) ? EmployeeData.poc_name : "";
//         resp.poc_number = (EmployeeData.poc_number != undefined) ? EmployeeData.poc_number : "";
//         resp.document = (EmployeeData.document != undefined) ? await self.employeeDocument(EmployeeData.document) : '';
//         if (vendorData) {
//             resp.vendor_id = (vendorData._id != undefined) ? vendorData._id : "";
//             resp.vendor_name = (vendorData.vendor_name != undefined) ? vendorData.vendor_name : "";
//             resp.vendor_person_name = (vendorData.name != undefined) ? vendorData.name : "";
//             resp.vendor_number = (vendorData.number != undefined) ? vendorData.number : "";
//         }
//         if (departmentData) {
//             resp.department_id = (departmentData._id != undefined) ? departmentData._id : "";
//             resp.department_name = (departmentData.name != undefined) ? departmentData.name : "";
//         }
//         if (sectionData) {
//             resp.section_id = (sectionData._id != undefined) ? sectionData._id : "";
//             resp.section_name = (sectionData.name != undefined) ? sectionData.name : "";
//         }
//         if (userTypeData) {
//             resp.user_type_id = (userTypeData._id != undefined) ? userTypeData._id : "";
//             resp.user_type = (userTypeData.name != undefined) ? userTypeData.name : "";
//         }
//         if (categoryData) {
//             resp.category_id = (categoryData._id != undefined) ? categoryData._id : "";
//             resp.category = (categoryData.name != undefined) ? categoryData.name : "";
//         }
//         if (subCategoryData) {
//             resp.sub_category_id = (subCategoryData._id != undefined) ? subCategoryData._id : "";
//             resp.sub_category = (subCategoryData.name != undefined) ? subCategoryData.name : "";
//         }
//         // if(pocDepartmentData){
//         //     resp.auth_department_id = (pocDepartmentData._id != undefined) ? pocDepartmentData._id : "";
//         //     resp.auth_department_name = (pocDepartmentData.name != undefined) ? pocDepartmentData.name : "";
//         // }
//         // if(pocSectionData){
//         //     resp.auth_section_id = (pocSectionData._id != undefined) ? pocSectionData._id : "";
//         //     resp.auth_section_name = (pocSectionData.name != undefined) ? pocSectionData.name : "";
//         // }
//         resolve(resp);
//     });
// }

// /* for user app */
// module.exports.getDataForOutpass = function (data) {
//     const self = this;
//     return new Promise(async function (resolve, reject) {
//         const resp = {
//             user_id: data.user._id,
//             report_id: data._id,
//             image: (data.user.avatar != undefined) ? await self.userAvatar(data.user.avatar) : '',
//             mobile_no: data.user.contact_number ?? '',
//             name: data.user.name ?? '',
//             emp_code: '',
//             department: data.department && data.department.name ? data.department.name : '',
//             department_id: data.department && data.department._id ? data.department._id : '',
//             section: data.section && data.section.name ? data.section.name : '',
//             section_id: data.section && data.section._id ? data.section._id : '',
//             type: data.user_type.name ?? '',
//         }
//         resolve(resp);
//     });
// }

module.exports.reportIncidentCategoryIcon = function (icon) {
    return new Promise(function (resolve, reject) {
        if (icon != "" && icon != undefined) {
            resolve(locals.report_incident_category.path + icon);
        } else {
            resolve(locals.report_incident_category.default_path);
        }
    });
}

module.exports.reportIncidentSubCategoryIcon = function (icon) {
    return new Promise(function (resolve, reject) {
        if (icon != "" && icon != undefined) {
            resolve(locals.report_incident_sub_category.path + icon);
        } else {
            resolve(locals.report_incident_sub_category.default_path);
        }
    });
}

module.exports.reportIncidentIcon = function (icon) {
    return new Promise(function (resolve, reject) {
        if (icon != "" && icon != undefined) {
            resolve(locals.report_incident.path + icon);
        } else {
            resolve(locals.report_incident.default_path);
        }
    });
}

module.exports.dataServiceCategoryIcon = function (icon) {
    return new Promise(function (resolve, reject) {
        if (icon != "" && icon != undefined) {
            resolve(locals.data_service_category.path + icon);
        } else {
            resolve(locals.data_service_category.default_path);
        }
    });
}

module.exports.EmergencyTypeImage = function (icon) {
    return new Promise(function (resolve, reject) {
        if (icon != "" && icon != undefined) {
            resolve(locals.emergency_type.path + icon);
        } else {
            resolve(locals.emergency_type.default_path);
        }
    });
}

module.exports.dataSubServiceIcon = function (icon) {
    return new Promise(function (resolve, reject) {
        if (icon != "" && icon != undefined) {
            resolve(locals.data_sub_service.path + icon);
        } else {
            resolve(locals.data_sub_service.default_path);
        }
    });
}

module.exports.knowledgeHubImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.knowledge_hub.path + image);
        } else {
            resolve(locals.knowledge_hub.default_path);
        }
    });
}

// module.exports.iconUrl = function (icon) {
//     return new Promise(function (resolve, reject) {
//         if (icon != "") {
//             resolve(locals.icon.path + icon);
//         } else {
//             resolve(locals.icon.default_path);
//         }
//     });
// }

module.exports.covidImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.covid.path + image);
        } else {
            resolve(locals.covid.default_path);
        }
    });
}

module.exports.bannerImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.banner.path + image);
        } else {
            resolve(locals.banner.default_path);
        }
    });
}

module.exports.faqCategoryImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.faq_category.path + image);
        } else {
            resolve(locals.faq_category.default_path);
        }
    });
}

module.exports.faqSubCategoryImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.faq_sub_category.path + image);
        } else {
            resolve(locals.faq_sub_category.default_path);
        }
    });
}

module.exports.faqImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.faq.path + image);
        } else {
            resolve(locals.faq.default_path);
        }
    });
}

module.exports.otpCodeImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.otp_code.path + image);
        } else {
            resolve(locals.otp_code.default_path);
        }
    });
}

// module.exports.noticesBoardDocument = function (document) {
//     return new Promise(function (resolve, reject) {
//         if (document != "") {
//             resolve(locals.notices_board.path + document);
//         } else {
//             resolve(locals.notices_board.default_path);
//         }
//     });
// }
module.exports.noticesBoardDocument = function (document) {
    return new Promise(function (resolve, reject) {
        if (document != "" && document != undefined) {
            resolve(locals.notices_board.path + document);
        } else {
            resolve(locals.notices_board.default_path);
        }
    });
}

// module.exports.noticePublishDocument = function (document) {
//     return new Promise(function (resolve, reject) {
//         if (document != "") {
//             resolve(locals.notice_publish.path + document);
//         } else {
//             resolve(locals.notice_publish.default_path);
//         }
//     });
// }

module.exports.vendorOrderImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.vendor_order_image.path + image);
        } else {
            resolve(locals.vendor_order_image.default_path);
        }
    });
}

module.exports.authorizedSignatoryImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.id_card_authorized_signatory.path + image);
        } else {
            resolve(locals.id_card_authorized_signatory.default_path);
        }
    });
}

module.exports.unitCompanyImage = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined) {
            resolve(locals.unit_company.path + image);
        } else {
            resolve(locals.unit_company.default_path);
        }
    });
}

module.exports.unitCompanyImageBase64 = function (image) {
    return new Promise(function (resolve, reject) {
        if (image != "" && image != undefined && fs.existsSync(locals.unit_company.base64_path + image)) {
            resolve(`data:image/${image.split('.')[1]};base64,${fs.readFileSync(locals.unit_company.base64_path + image, 'base64')}`);
        } else {
            resolve('')
        }
    });
}

// module.exports.driverAvatar = function (avatar) {
//     return new Promise(function (resolve, reject) {
//         if (avatar != undefined && avatar != "") {
//             resolve(locals.driver_avatar.path + avatar);
//         } else {
//             resolve('');
//         }
//     });
// }

// module.exports.driverLicence = function (licence) {
//     return new Promise(function (resolve, reject) {
//         if (licence != "") {
//             resolve(locals.driver_licence.path + licence);
//         } else {
//             resolve(locals.driver_licence.default_path);
//         }
//     });
// }
// module.exports.drivingLicenceImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.driving_licence_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }

// module.exports.driverCertificate = function (certificate) {
//     return new Promise(function (resolve, reject) {
//         if (certificate != "") {
//             resolve(locals.driver_certificate.path + certificate);
//         } else {
//             resolve(locals.driver_certificate.default_path);
//         }
//     });
// }

// module.exports.driverProof = function (proof) {
//     return new Promise(function (resolve, reject) {
//         if (proof != "") {
//             resolve(locals.driver_proof.path + proof);
//         } else {
//             resolve(locals.driver_proof.default_path);
//         }
//     });
// }

module.exports.userAvatar = function (avatar) {
    return new Promise(function (resolve, reject) {
        if (avatar != "" && avatar != undefined) {
            resolve(locals.user_avatar.path + avatar);
        } else {
            resolve(locals.user_avatar.default_path);
        }
    });
}

module.exports.employeeIdCard = function (id_card) {
    return new Promise(function (resolve, reject) {
        if (id_card != "" && id_card != undefined) {
            resolve(locals.employee_id_card.path + id_card);
        } else {
            resolve(locals.employee_id_card.default_path);
        }
    });
}

module.exports.employeeDocument = function (document) {
    return new Promise(function (resolve, reject) {
        if (document != "" && document != undefined) {
            resolve(locals.employee_document.path + document);
        } else {
            resolve(locals.employee_document.default_path);
        }
    });
}

module.exports.employeeJoiningForm = function (joining_form) {
    return new Promise(function (resolve, reject) {
        if (joining_form != "" && joining_form != undefined) {
            resolve(locals.employee_joining_form.path + joining_form);
        } else {
            resolve(locals.employee_joining_form.default_path);
        }
    });
}
// module.exports.checkpointQrcodeImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != "") {
//             resolve(locals.checkpoint_qrcode_image.path + image);
//         } else {
//             resolve(locals.checkpoint_qrcode_image.default_path);
//         }
//     });
// }

// module.exports.visitorImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.visitor_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.materialImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.material_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.visitorIdProofImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.visitor_id_proof_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.visitorMaterialImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.visitor_material_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }

// module.exports.materialWeighment1Image = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.material_weighment1_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.materialWeighment2Image = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.material_weighment2_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.materialLoadingUnloadingImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.material_loading_unloading_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.materialGatepassDocumentImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.material_gatepass_document.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }

// module.exports.staffBagImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.staff_bag_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.staffImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.staff_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.helpDeskImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.helpdesk_image.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
// module.exports.reportUnitImage = function (image) {
//     return new Promise(function (resolve, reject) {
//         if (image != undefined && image != "") {
//             resolve(locals.report_incident_unit.path + image);
//         } else {
//             resolve('');
//         }
//     });
// }
