var initESW = function(gslbBaseURL) {
  embedded_svc.settings.displayHelpButton = true; //Or false
  embedded_svc.settings.language = 'es'; //For example, enter 'en' or 'en-US'

  embedded_svc.settings.defaultMinimizedText = 'Chatea con nosotros'; //(Defaults to Chat with an Expert)
  embedded_svc.settings.disabledMinimizedText = 'Agente inactivo'; //(Defaults to Agent Offline)

  embedded_svc.settings.loadingText = 'Un momento por favor'; //(Defaults to Loading)
  embedded_svc.settings.storageDomain = 'localhost'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

  embedded_svc.settings.chatbotAvatarImgURL =
    'https://c.na112.content.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Png&versionId=0683i000001fpjD&operationContext=DELIVERY&contentId=05T3i00000AP7CO&page=0&d=/a/3i000000PO4P/s9DCHsBFpqSbwLq25utHZXTRKjjihzfqkZ7HUhwjL9I&oid=00D3i000000uzPD&dpt=null&viewId=';

  // Settings for Chat
  //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
  // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
  // Returns a valid button ID.
  //};
  //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
  //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
  //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

  embedded_svc.settings.enabledFeatures = ['LiveAgent'];
  embedded_svc.settings.entryFeature = 'LiveAgent';

  embedded_svc.init(
    'https://aekia.my.salesforce.com',
    'https://aekia.secure.force.com/liveAgentSetupFlow',
    gslbBaseURL,
    '00D3i000000uzPD',
    'Chat',
    {
      baseLiveAgentContentURL:
        'https://c.la4-c2-ph2.salesforceliveagent.com/content',
      deploymentId: '5723i0000004r4u',
      buttonId: '5733i0000004rZx',
      baseLiveAgentURL: 'https://d.la4-c2-ph2.salesforceliveagent.com/chat',
      eswLiveAgentDevName: 'Chat',
      isOfflineSupportEnabled: false
    }
  );
};

if (!window.embedded_svc) {
  var s = document.createElement('script');
  s.setAttribute(
    'src',
    'https://aekia.my.salesforce.com/embeddedservice/5.0/esw.min.js'
  );
  s.onload = function() {
    initESW(null);
  };
  document.body.appendChild(s);
} else {
  initESW('https://service.force.com');
}
