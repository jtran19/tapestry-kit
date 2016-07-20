define([], function() {
	return {
		init : function(opts) {
			console.log(opts['fieldId']);

			var notice = document.getElementById('capslock-notice');
			var handled;

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
								showCapsLockNotice();
							}
						} else {
							if (event.key === 'CapsLock') {
								toggleCapsLockNotice();
							}
						}
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
				if (!notice.classList.contains('hidden')) {
					notice.classList.add('hidden');
				}
			}
			
			function hideCapsLockNotice() {
				
			}
			
			function toggleCapsLockNotice() {
				notice.classList.toggle('hidden');
			}
		}
	}
});