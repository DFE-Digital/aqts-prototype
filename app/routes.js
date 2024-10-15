//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
    

// Record consent qual 1
    router.post('/consent-valid', function(request, response) {

        var consentValid = request.session.data['is-consent-valid']
        if (consentValid == "yes"){
            response.redirect("manage/verification/verification-overview-valid-consent")
        } else if (consentValid == "no") {
            response.redirect("manage/verification/qual1-send-consent-for-review")
        }
    })

    // Ecctis overdue qual 1
    router.post('/ecctis-overdue-qual1', function(request, response) {

        var ecctisOverdue = request.session.data['ecctis-overdue']
        if (ecctisOverdue == "received-valid"){
            response.redirect("manage/verification/overdue/verification-overview-overdue-ecctis-accepted")
        } else if (ecctisOverdue == "received-invalid") {
            response.redirect("manage/verification/overdue/qual1-send-ecctis-for-review")
        } else {
            response.redirect("manage/verification/overdue/qual1-send-ecctis-for-review")
        }
    })


    // Virus scanner upload another id doc
    router.post('/virus-scanner-another', function(request, response) {

        var v2another = request.session.data['v2-another-identification']
        if (v2another == "yes"){
            response.redirect("apply/AQTS-240/v2/upload-id3")
        } 
         else {
            response.redirect("apply/AQTS-240/v2/task-list-error")
        }
    })


     // Has OLI yes or no hint text version
     router.post('/oli-select', function(request, response) {

        var signin = request.session.data['signin']
        if (signin == "Yes"){
            response.redirect("apply/AQTS-538/oli/oli-start")
        } 
         else {
            response.redirect("apply/AQTS-538/pause")
        }
    })

    // Has OLI yes or no banner version
    router.post('/oli-select-banner', function(request, response) {

        var signinB = request.session.data['signinB']
        if (signinB == "Yes"){
            response.redirect("apply/AQTS-538/oli/oli-start")
        } 
         else {
            response.redirect("apply/AQTS-538/pause")
        }
    })

     // OLI security codes method
     router.post('/oli-security-code', function(request, response) {

        var securityMethod = request.session.data['choose-security-codes']
        if (securityMethod == "Text message"){
            response.redirect("apply/AQTS-538/oli/create-account/enter-phone-number")
        } 
         else {
            response.redirect("apply/AQTS-538/oli/create-account/auth-app")
        }
    })

       // OLI security codes - changing type
       router.post('/choose-security-code-answer', function(request, response) {

        var securityMethod = request.session.data['choose-security-codes']
        if (securityMethod == "Text message"){
            response.redirect("apply/AQTS-538/oli/sign-in/change-security-codes/enter-phone-number")
        } 
         else {
            response.redirect("apply/AQTS-538/oli/sign-in/change-security-codes/auth-app")
        }
    })

     // OLI security codes method change again
     router.post('/oli-security-code-change', function(request, response) {

        var securityMethod = request.session.data['choose-security-codes']
        if (securityMethod == "Text message"){
            response.redirect("apply/AQTS-538/oli/sign-in/change-security-codes/enter-phone-number")
        } 
         else {
            response.redirect("apply/AQTS-538/oli/sign-in/change-security-codes/auth-app")
        }
    })