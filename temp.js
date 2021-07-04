$.get('https://raw.githubusercontent.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.contentWindow.min.js', function (data) {
    console.log(data)
    $("head").append('<script>' + data + '<\/script>');
    //   iFrameResize({
    //   log: true
    // });
});