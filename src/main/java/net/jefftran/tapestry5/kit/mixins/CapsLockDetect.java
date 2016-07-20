package net.jefftran.tapestry5.kit.mixins;

import org.apache.tapestry5.MarkupWriter;
import org.apache.tapestry5.annotations.AfterRender;
import org.apache.tapestry5.annotations.Environmental;
import org.apache.tapestry5.annotations.InjectContainer;
import org.apache.tapestry5.annotations.MixinAfter;
import org.apache.tapestry5.json.JSONObject;
import org.apache.tapestry5.runtime.Component;
import org.apache.tapestry5.services.javascript.JavaScriptSupport;

@MixinAfter
public class CapsLockDetect {

	@InjectContainer
	Component container;
	
	@Environmental
	JavaScriptSupport jsSupport;
	
	@AfterRender
	void after(MarkupWriter writer) {
		JSONObject opts = new JSONObject();
		opts.put("fieldId", container.getComponentResources().getId());
		jsSupport.require("CapsLockDetect/CapsLockDetect").invoke("init").with(opts);
		
		writer.element("span", "id", "capslock-notice", "class", "hidden");
		writer.write("caps lock");
		writer.end();
	}
}
