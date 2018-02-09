[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)


YDigital Media Client Side Libraries
====

This set of libraries makes integration to YDigital Media tracking system a breeze.



## DFP Tools
Use this library in case you want to serve interstitials or outofpage formats in DFP. This was only tested for YDigital Media creatives but should word with any creative.
The library needs jQuery or Zepto to be loaded in the target page. But don't worry, if none isn't included, the library will load it for you.

1. [How to use](#how-to-use);

**Note:** This documentation assumes that you have basic knowledge of Javascript and HTML.



#### How to use
In order to use this functionality to serve outofpage creatives in your DFP placement you just need to include this library and the usual placement code returned by the DFP Tag generator. You must also must include the class name "**out-of-page-slot**" in the placement target element.
See the full example bellow:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <script type="text/javascript" src='//www.googletagservices.com/tag/js/gpt.js'></script>
        <script type="text/javascript">
            googletag.cmd.push(function() {
                googletag.defineOutOfPageSlot('/466538085000/jg_test_interstitial', 'div-gpt-ad-1507138288981-0').addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.pubads().collapseEmptyDivs();
                //googletag.pubads().enableSyncRendering();
                googletag.enableServices();
            });
        </script>
        <script type="text/javascript" src='//cdn.jsdelivr.net/gh/ydigitalmedia/dfptools@1/yd-dfp-tools.js'></script>
    </head>
    <body>
        <div id='div-gpt-ad-1507138288981-0' class="out-of-page-slot"><!-- Notide the add of the class in this line -->
            <script type="text/javascript">
                googletag.cmd.push(function() {
                    googletag.display('div-gpt-ad-1507138288981-0');
                });
            </script>
        </div>
    </body>
</html>
```

That's it!
