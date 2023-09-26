<script>
	import { onMount } from 'svelte';


  function getScriptTag() {
    return document.currentScript || currentScriptPolyfill();
  }

  // IE does not support document.currentScript, attempt to support it.
  // This will fail if for example the script is dynamically inserted in to the DOM or loaded with defer or async
  function currentScriptPolyfill() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  }

  function takeOverIframe() {
    // Some site editors, notably WIX, embed our JS inside an iframe with no other content.
    // In this case, to provide a good UI, we'll take over the parent frame.
    // However, we also want to allow merchants to embed us inside the content of an iframe if they want to.
    // The code below tries to detect the WIX style situation.
    var scriptTag = getScriptTag();
    var parentTags = { HEAD: 1, HTML: 1}
    return !scriptTag.parentNode || parentTags[scriptTag.parentNode.tagName]
  }

  function embedIframe() {
		console.log("iframe");
    var scriptTag = getScriptTag();

    var iframe = document.createElement('iframe');
    var isSquareOnline = ((document.querySelector('meta[name="generator"]') || {}).content || '').includes('Square Online');

      var width = "100%";
      var height = "100%";
      iframe.style.minHeight = isSquareOnline ? "auto" : "500px";

    iframe.style.width = width;
    iframe.style.height = height;
    iframe.style.border = 'none';
    iframe.src = 'https://squareup.com/appointments/buyer/widget/az3zawctvqsrxl/LSZ72EJZNDXS8';

    scriptTag.parentNode.insertBefore(iframe, scriptTag);
  }

  function embedBookingButton() {
		console.log("booking butotn");
    var scriptTag = getScriptTag();

    var container = document.createElement('div');
    var button = document.createElement('a');

    button.setAttribute("style", "background-color: #006aff; color: white; height: 40px; line-height: 38px; " +
            "padding: 0 28px; border-radius: 3px; font-weight: 500; font-size: 14px; cursor: pointer; " +
            "display: inline-block; text-decoration: none");
    button.setAttribute("href", 'https://squareup.com/appointments/book/az3zawctvqsrxl/LSZ72EJZNDXS8/start');
    button.textContent = "Book Appointment Now";

    container.setAttribute("style", "text-align: center");
    container.appendChild(button);
    scriptTag.parentNode.insertBefore(container, scriptTag);
  }

  function scriptParentWidth() {
    try {
      var scriptParent = getScriptTag().parentNode;
      var computedStyle = getComputedStyle(scriptParent);
      var paddingX = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
      var borderX = parseFloat(computedStyle.borderLeftWidth) + parseFloat(computedStyle.borderRightWidth);
      return scriptParent.offsetWidth - paddingX - borderX;
    } catch (e) { // above not certain to work in all browser + tag scenarios, fall back to document
      return document.body.clientWidth;
    }
  }

	// https://squareup.com/appointments/buyer/widget/az3zawctvqsrxl/LSZ72EJZNDXS8.js
	onMount(embedIframe);
</script>
<section>
	<h1>Book an appointment today</h1>
</section>

<style>
	h1 {
		width: 100%;
		text-align: center;
	}
	section {
		gap: 2rem;
		& > div {
			flex: 1;
			min-width: 100%;
			@media (min-width: 798px) {
				min-width: 400px;
			}
		}
		& .package-container {
			padding: 2rem;
			border-radius: 1rem;
			border: 1px solid #000;
			& div {
				display: flex;
				flex-wrap: wrap;
				& ul {
					flex: 1;
					min-width: 100%;
					& li {
						border-bottom: 1px solid #cccccc;
						padding-bottom: 0.5rem;
						margin: 0.5rem 0;
						justify-content: flex-start;
						gap: 1rem;
						&:last-child {
							border: none;
						}
						& svg {
							flex-shrink: 0;
							width: 24px;
							height: 24px;
						}
					}
				}
			}
		}
	}

</style>
