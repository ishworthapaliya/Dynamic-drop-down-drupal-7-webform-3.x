(function ($) {
  Drupal.behaviors.dynamic_dropdown_demo =  {
	attach: function(context, settings) {
		
		$('#webform-client-form-28 #edit-submitted-select-a-model'+' option:not(:first)').remove().end();
		
		$("#webform-client-form-28 #edit-submitted-select-a-manufacturer").change(function(){
		  var nid = $('#webform-client-form-28 #edit-submitted-select-a-manufacturer option:selected').val();
		
		  $("#webform-client-form-28 #edit-submitted-select-a-model").html('<option value selected="selected">Listing models...</option>');
				
		  $.get(Drupal.settings.basePath +'?q=get-model-list/' + nid, null, updateModel);
			return false;
		
		});
		
		var updateModel = function(result) {
				$("#webform-client-form-28 #edit-submitted-select-a-model").html(result.html_output);
		}
		
	}
  };
})(jQuery);