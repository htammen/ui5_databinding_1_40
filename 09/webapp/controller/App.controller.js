sap.ui.define(["sap/ui/core/mvc/Controller"],
	function (Controller) {
		"use strict";

	return Controller.extend("sap.ui.demo.db.controller.App", {
		formatMail: function(sFirstName, sLastName) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			return sap.m.URLHelper.normalizeEmail(
				sFirstName + "." + sLastName + "@example.com",
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		},

		formatMapUrl: function(sStreet, sZip, sCity, sCountry) {
			return "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=500x300&markers="
			+ jQuery.sap.encodeURL(sStreet + ", " + sZip +  " " + sCity + ", " + sCountry);
		}

	});
});