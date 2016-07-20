package net.jefftran.tapestry5.kit.pages;

import org.apache.tapestry5.annotations.SetupRender;
import org.apache.tapestry5.ioc.annotations.Inject;
import org.slf4j.Logger;

public class Test {

	@Inject
	Logger logger;
	
	@SetupRender
	void setup() {
		logger.info("Setup!");
	}
}
