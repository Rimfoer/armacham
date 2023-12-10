var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var flashvars = 
{
	//custom flash vars go here as JavaScript object properites
	//use native data types where necessary i.e. Boolean, Number, String
};
var params = 
{
	// properties of the embed and object html tags
	menu: 	"true",
	scale: 	"noscale", 
	wmode: 	"transparent",
	bgcolor: "#000000"
};
var attributes = 
{
	// any custom HTML attributes
	id: 	"flashMovie",
	name: 	"flashMovie"
};

// does the actual embed, replace all values wrapped in <>
swfobject.embedSWF("/flash/MainSite.swf", "flashContent", "100%", "1210", "9.0.0", "js/swfobject/expressInstall.swf", flashvars, params, attributes);


}
