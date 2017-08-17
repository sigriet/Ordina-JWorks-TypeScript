var JSONParser = (function () {
    function JSONParser() {
    }
    JSONParser.prototype.getJSON = function (uri, fn) {
        var request = new XMLHttpRequest();
        request.open('GET', uri, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                fn(JSON.parse(this.response));
            }
            else {
                console.error(this);
            }
        };
        request.onerror = function () {
            console.error(this);
        };
        request.send();
    };
    return JSONParser;
}());
//# sourceMappingURL=JSONParser.js.map