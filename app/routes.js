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