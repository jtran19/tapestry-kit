/*
 * FYI: Chrome on OSX (and maybe other platforms) registers CapsLock KEYUP when caps lock 
 * is turned off, not when the physical key is released.  CapsLock KEYDOWN is registered 
 * when caps lock is turned on, not when the physical key is depressed.
 */

define([], function() {
	return {
		init : function(opts) {
			console.log(opts['fieldId']);

			var notice = document.getElementById('capslock-notice');
//			var handled;

			document.getElementById(opts['fieldId']).addEventListener(
					'keyup',
					function(event) {
						console.log(event.key);

						if (event.key.length === 1) {
							var keyCode = event.key.charCodeAt(0);
							console.log(keyCode);
							var shiftKeyWasDown = event.shiftKey;
							var isUpperCase = keyCode >= 65 && keyCode <= 90;
							var isLowerCase = keyCode >= 97 && keyCode <= 122;

							if ((isLowerCase && shiftKeyWasDown)
									|| (isUpperCase && !shiftKeyWasDown)) {
								notice.classList.remove('hidden');
							} else if ((isLowerCase && !shiftKeyWasDown)
									|| (isUpperCase && shiftKeyWasDown)) {
								hideCapsLockNotice();
							}
						}
//						else {
//							if (event.key === 'CapsLock') {
//								toggleCapsLockNotice();
//							}
//						}
					});

//			document.getElementById(opts['fieldId']).addEventListener(
//					'keydown', function(event) {
//						console.log('keydown ' + event.key);
//
//						if (event.key === 'CapsLock') {
//							showCapsLockNotice();
//						}
//					});

			function showCapsLockNotice() {
				notice.classList.remove('hidden');
			}
			
			function hideCapsLockNotice() {
				if (!notice.classList.contains('hidden')) {
					notice.classList.add('hidden');
				}
			}
			
			function toggleCapsLockNotice() {
				notice.classList.toggle('hidden');
			}
		}
	}
});