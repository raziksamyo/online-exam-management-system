module.exports = (port, version) => {
    const env = process.env;
    const config = {
        isLive: env.live,
        tokenExpDays: '1D',
        appTokenExpDays: '1D',
        EmployeeValidDays: '365',
        schedulerMinuts: 5 * 60 * 1000,
        layout: 'admin/layouts/layout',
        emailTemplate: './src/' + version + '/views/email_template/',
        views: './src/' + version + '/views/',
        adminAssetsJs: env.BASE_URL + 'js_assets/',
        icon: env.BASE_URL + 'public/assets/images/logo-text.png',
        role_level: {
            SUP_ADMIN: 1,
            UNIT: 2,
        },
        destination_page: [
            { key: 'user_app_home', value: 'User App Home' },
        ],
        banner: {
            base_path: './public/uploads/banner/',
            path: env.BASE_URL + 'public/uploads/banner/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        report_incident_sub_category: {
            base_path: './public/uploads/report_incident_sub_category/',
            path: env.BASE_URL + 'public/uploads/report_incident_sub_category/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        report_incident_category: {
            base_path: './public/uploads/report_incident_category/',
            path: env.BASE_URL + 'public/uploads/report_incident_category/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        report_incident: {
            base_path: './public/uploads/report_incident/',
            path: env.BASE_URL + 'public/uploads/report_incident/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        data_service_category: {
            base_path: './public/uploads/data_service_category/',
            path: env.BASE_URL + 'public/uploads/data_service_category/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        data_sub_service: {
            base_path: './public/uploads/data_sub_service/',
            path: env.BASE_URL + 'public/uploads/data_sub_service/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        // assetsImage: env.BASE_URL + 'public/assets/images/',
        // backendAssetsJs: env.BASE_URL + 'public/assets/js/custom/backend/',
        // superAdminAssetsJs: env.BASE_URL + 'public/assets/js/custom/backend/super_admin/',
        // adminAssetsJs: env.BASE_URL + 'public/assets/js/custom/backend/admin/',

        temp: {
            base_path: './public/uploads/temp/',
            path: env.BASE_URL + 'public/uploads/temp/',
        },


        // report_incident_unit: {
        //     base_path: './public/uploads/report_incident_unit/',
        //     path: env.BASE_URL + 'public/uploads/report_incident_unit/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },


        knowledge_hub: {
            base_path: './public/uploads/knowledge_hub/',
            path: env.BASE_URL + 'public/uploads/knowledge_hub/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        // icon: {
        //     base_path: './public/uploads/icon/',
        //     path: env.BASE_URL + 'public/uploads/icon/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        covid: {
            base_path: './public/uploads/covid/',
            path: env.BASE_URL + 'public/uploads/covid/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },

        // faq_category: {
        //     base_path: './public/uploads/faq_category/',
        //     path: env.BASE_URL + 'public/uploads/faq_category/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // faq_sub_category: {
        //     base_path: './public/uploads/faq_sub_category/',
        //     path: env.BASE_URL + 'public/uploads/faq_sub_category/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // faq: {
        //     base_path: './public/uploads/faq/',
        //     path: env.BASE_URL + 'public/uploads/faq/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        notices_board: {
            base_path: './public/uploads/notices_board/',
            path: env.BASE_URL + 'public/uploads/notices_board/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        faq_category: {
            base_path: './public/uploads/faq_category/',
            path: env.BASE_URL + 'public/uploads/faq_category/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        faq_sub_category: {
            base_path: './public/uploads/faq_sub_category/',
            path: env.BASE_URL + 'public/uploads/faq_sub_category/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        faq: {
            base_path: './public/uploads/faq/',
            path: env.BASE_URL + 'public/uploads/faq/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        otp_code: {
            base_path: './public/uploads/otp_code/',
            path: env.BASE_URL + 'public/uploads/otp_code/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        // notices_board: {
        //     base_path: './public/uploads/notices_board/',
        //     path: env.BASE_URL + 'public/uploads/notices_board/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // notice_publish: {
        //     base_path: './public/uploads/notice_publish/',
        //     path: env.BASE_URL + 'public/uploads/notice_publish/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        unit_company: {
            base_path: './public/uploads/unit_company/',
            path: env.BASE_URL + 'public/uploads/unit_company/',
            base64_path: 'public/uploads/unit_company/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        emergency_type: {
            base_path: './public/uploads/emergency_type/',
            path: env.BASE_URL + 'public/uploads/emergency_type/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        vendor_order_image: {
            base_path: './public/uploads/vendor_order_image/',
            path: env.BASE_URL + 'public/uploads/vendor_order_image/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        vendor_bulk_upload: {
            base_path: './public/uploads/vendor_bulk_upload/',
            path: env.BASE_URL + 'public/uploads/vendor_bulk_upload/',
        },
        // driver_avatar: {
        //     base_path: './public/uploads/driver_avatar/',
        //     path: env.BASE_URL + 'public/uploads/driver_avatar/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // driver_licence: {
        //     base_path: './public/uploads/driver_licence/',
        //     path: env.BASE_URL + 'public/uploads/driver_licence/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // driver_certificate: {
        //     base_path: './public/uploads/driver_certificate/',
        //     path: env.BASE_URL + 'public/uploads/driver_certificate/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // driver_proof: {
        //     base_path: './public/uploads/driver_proof/',
        //     path: env.BASE_URL + 'public/uploads/driver_proof/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        user_avatar: {
            base_path: './public/uploads/user_avatar/',
            path: env.BASE_URL + 'public/uploads/user_avatar/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        employee_id_card: {
            base_path: './public/uploads/employee_id_card/',
            path: env.BASE_URL + 'public/uploads/employee_id_card/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        employee_joining_form: {
            base_path: './public/uploads/employee_joining_form/',
            path: env.BASE_URL + 'public/uploads/employee_joining_form/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        employee_document: {
            base_path: './public/uploads/employee_document/',
            path: env.BASE_URL + 'public/uploads/employee_document/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        // employee_id_image: {
        //     base_path: './public/uploads/employee_id_image/',
        //     path: env.BASE_URL + 'public/uploads/employee_id_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        employee_bulk_upload: {
            base_path: './public/uploads/employee_bulk_upload/',
            path: env.BASE_URL + 'public/uploads/employee_bulk_upload/',
        },
        // checkpoint_qrcode_image: {
        //     base_path: './public/uploads/checkpoint_qrcode_image/',
        //     path: env.BASE_URL + 'public/uploads/checkpoint_qrcode_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        emergency_contact_icon: {
            base_path: './public/uploads/emergency_contact_icon/',
            path: env.BASE_URL + 'public/uploads/emergency_contact_icon/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
        // outpass_image: {
        //     base_path: './public/uploads/outpass_image/',
        //     path: env.BASE_URL + 'public/uploads/outpass_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // visitor_image: {
        //     base_path: './public/uploads/visitor_image/',
        //     path: env.BASE_URL + 'public/uploads/visitor_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // visitor_id_proof_image: {
        //     base_path: './public/uploads/visitor_id_proof_image/',
        //     path: env.BASE_URL + 'public/uploads/visitor_id_proof_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // visitor_material_image: {
        //     base_path: './public/uploads/visitor_material_image/',
        //     path: env.BASE_URL + 'public/uploads/visitor_material_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // driving_licence_image: {
        //     base_path: './public/uploads/driving_licence_image/',
        //     path: env.BASE_URL + 'public/uploads/driving_licence_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // material_weighment1_image: {
        //     base_path: './public/uploads/material_weighment1_image/',
        //     path: env.BASE_URL + 'public/uploads/material_weighment1_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // material_weighment1_video: {
        //     base_path: './public/uploads/material_weighment1_video/',
        //     path: env.BASE_URL + 'public/uploads/material_weighment1_video/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // material_loading_unloading_document: {
        //     base_path: './public/uploads/material_loading_unloading_document/',
        //     path: env.BASE_URL + 'public/uploads/material_loading_unloading_document/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // material_loading_unloading_image: {
        //     base_path: './public/uploads/material_loading_unloading_image/',
        //     path: env.BASE_URL + 'public/uploads/material_loading_unloading_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // material_weighment2_image: {
        //     base_path: './public/uploads/material_weighment2_image/',
        //     path: env.BASE_URL + 'public/uploads/material_weighment2_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // material_weighment2_video: {
        //     base_path: './public/uploads/material_weighment2_video/',
        //     path: env.BASE_URL + 'public/uploads/material_weighment2_video/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // material_image: {
        //     base_path: './public/uploads/material_image/',
        //     path: env.BASE_URL + 'public/uploads/material_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // material_gatepass_document: {
        //     base_path: './public/uploads/material_gatepass_document/',
        //     path: env.BASE_URL + 'public/uploads/material_gatepass_document/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // helpdesk_image: {
        //     base_path: './public/uploads/helpdesk_image/',
        //     path: env.BASE_URL + 'public/uploads/helpdesk_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // staff_image: {
        //     base_path: './public/uploads/staff_image/',
        //     path: env.BASE_URL + 'public/uploads/staff_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // staff_bag_image: {
        //     base_path: './public/uploads/staff_bag_image/',
        //     path: env.BASE_URL + 'public/uploads/staff_bag_image/',
        //     default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        // },
        // time: [
        //     { key: 10, value: '10 Min' },
        //     { key: 15, value: '15 Min' },
        //     { key: 30, value: '30 Min' },
        //     { key: 45, value: '45 Min' },
        //     { key: 60, value: '1 Hour' }
        // ],

        user_type: [
            { key: 'permanent', value: 'Permanent' },
            { key: 'temporary', value: 'Temporary' },
        ],
        // vendor_type: [
        //     { key: 'temp_staffing', value: 'Temp Staffing' },
        //     { key: 'security', value: 'Security' },
        //     { key: 'facility_management', value: 'Facility Management' },
        //     { key: 'safety_consultant', value: 'Safety Consultant' },
        // ],
        // erase_visitor_days: [
        //     { key: 180, value: '180 Days' },
        //     { key: 120, value: '120 Days' },
        //     { key: 60, value: '60 Days' },
        // ],
        // emergency_type: [
        //     { key: 'Medical', value: 'Medical' },
        //     { key: 'Fire station', value: 'Fire station' },
        //     { key: 'Police', value: 'Police' },
        //     { key: 'Govt Ambulance', value: 'Govt Ambulance' },
        //     { key: 'Private Ambulance', value: 'Private Ambulance' },
        //     { key: 'Traffic Police', value: 'Traffic Police' },
        //     { key: 'Civil Protection', value: 'Civil Protection' },
        //     { key: 'Disaster Management', value: 'Disaster Management' },
        //     { key: 'Water Supply', value: 'Water Supply' },
        //     { key: 'Electrical Supply', value: 'Electrical Supply' },
        //     { key: 'Govt Blood bank', value: 'Govt Blood bank' },
        //     { key: 'Private Blood bank', value: 'Private Blood bank' },
        //     { key: 'Women Helpline', value: 'Women Helpline' },
        //     { key: 'Child Helpline', value: 'Child Helpline' },
        //     { key: 'Animal Rescue', value: 'Animal Rescue' },
        //     { key: 'Forest Department', value: 'Forest Department' },
        //     { key: 'Elders Helpline', value: 'Elders Helpline' },
        //     { key: 'Snake Catcher', value: 'Snake Catcher' },
        //     { key: 'Life Guards', value: 'Life Guards' },
        //     { key: 'Bee Catcher', value: 'Bee Catcher' },
        //     { key: 'Sea Rescue', value: 'Sea Rescue' },
        //     { key: 'Accident Services', value: 'Accident Services' },
        //     { key: 'Local Redcross', value: 'Local Redcross' },
        // ],
        // gate_privilige_modules: [
        //     { key: 'permanent_employee', value: 'Permanent Employee' },
        //     { key: 'temp_employee', value: 'Temp Employee' },
        //     { key: 'workforce', value: 'Workforce' },
        //     { key: 'material', value: 'Material' },
        // ],
        police_verification: [
            { key: 'verified', value: 'Verified' },
            { key: 'not_verified', value: 'Not verified' },
        ],
        hierable: [
            { key: 'hierable', value: 'Hierable' },
            { key: 'not_hierable', value: 'Not hierable' },
        ],
        visible: [
            { key: 'visible', value: 'Visible' },
            { key: 'not_visible', value: 'Not visible' },
        ],
        frequent_visitor: [
            { key: 'frequent_visitor', value: 'Frequent visitor' },
            { key: 'not_frequent_visitor', value: 'Not frequent visitor' },
        ],
        blood_group: ['A+', 'A-', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'B+'],
        // day: [
        //     { key: 0, value: 'Monday' },
        //     { key: 1, value: 'Tuesday' },
        //     { key: 2, value: 'wednesday' },
        //     { key: 3, value: 'thursday' },
        //     { key: 4, value: 'friday' },
        //     { key: 5, value: 'saturday' },
        //     { key: 6, value: 'sunday' },
        // ],

        id_card_authorized_signatory: {
            base_path: './public/uploads/id_card_authorized_signatory/',
            path: env.BASE_URL + 'public/uploads/id_card_authorized_signatory/',
            default_path: env.BASE_URL + 'public/assets/images/blank-img.png'
        },
    };
    return config;
}