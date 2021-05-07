import './xnquery.js'

(function (window, $) {

    let settings = { value : '#ffffff' };
    const CSS = '.cpicker-container {color:black;z-index:9999} .cpicker-container input[type=color]{cursor:pointer}.cpicker-container input[type=color i],.cpicker-container input[type=color i]::-webkit-color-swatch,.cpicker-container input[type=color i]::-webkit-color-swatch-wrapper{padding:0;border-color:#f8f8f8;border-radius:5px}.cpicker-radio{display:flex;justify-content:space-evenly}.cpicker-radio>div{vertical-align:middle}.cpicker-radio>div:not(:last-of-type){margin-right:1px}.cpicker-radio input[type=radio]{position:absolute;left:-9999px}.cpicker-radio input[type=radio]+label{background-color:#fff;color:#369;border-radius:3px;padding:.25rem .5rem;transition:background-color .3s,color .3s}.cpicker-radio input[type=radio]:checked+label{background-color:#369;color:#fff}.cpicker-mode-gradient .cpicker-flex{align-items:stretch}.cpicker-row>span{margin:.5rem 0;display:block}.cpicker-modeswitch{padding:5px 0;border-bottom:1px solid #ccc}.cpicker-preview-element{width:32px;height:32px;border:1px solid #ccc;box-shadow:0 0 3px rgba(0,0,0,.2);cursor:pointer}.cpicker-container{position:absolute;width:280px;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.2);padding:5px}.cpicker-container>div{margin-bottom:5px}.cpicker-image-preview{vertical-align:middle;width:100px;min-height:56.25px;background-color:#f8f8f8}.cpicker-flex-between{justify-content:space-between;align-items:center}.cpicker-flex,.cpicker-flex-1{display:flex}.cpicker-checkers,.cpicker-img-preview{background:url(data:image/png;base64,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ICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDo3N0FERkY4MUNCOTcxMUUzQjE5OTk3MzZFOUEzNURDRjwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDo3N0FERkY4MkNCOTcxMUUzQjE5OTk3MzZFOUEzNURDRjwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDo3N0FERkY4NENCOTcxMUUzQjE5OTk3MzZFOUEzNURDRjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo3N0FERkY4M0NCOTcxMUUzQjE5OTk3MzZFOUEzNURDRjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CvRWRVUAAAAySURBVDgRY/wPBAx4wKFDh/DIMjAw4ZUlQnLUgMEQiCyE4tnOzg5vZI5G42CIRopjAQBajwlk46G0YgAAAABJRU5ErkJggg==)}.cpicker-img-preview{width:5rem;height:3rem;object-fit:contain;border-radius:3px;vertical-align:middle}.cpicker-controls{margin-bottom:0;padding-bottom:0}.cpicker-controls>span,.cpicker-flex-1>*,.cpicker-gradient-preview{flex:1}.cpicker-controls span>a{text-align:center;display:block;padding:.25rem;border:1px solid #ccc;background:#f8f8f8;border-radius:2px;cursor:pointer}.cpicker-controls span:first-of-type{margin-right:.25rem}.cpicker-controls,.cpicker-row:not(:first-of-type){border-top:1px solid #ccc;margin:5px 0;padding:5px 0}';

    function CPicker(element, options) {
        if (typeof element === 'string') element = document.querySelector(element);
        if (!element) return;
        settings.value = element.dataset.value ? element.dataset.value : element.value ? element.value : settings.value;
        this.element = element;
        this.$element = $(element);
        this.id = this.getRandomString();
        this.settings = $.extend({}, settings, options);
        this.injectCss();
        this.updateMode(this.settings.value);
        this.createClickableControl();
    }

    CPicker.prototype = {

        /* get the checked item from a NodeList of radio buttons */
        getChecked: function(radios) {
            return this.one(radios,":checked");
        },


        /* get a Node matching a selector from a NodeList */
        one: function(nodes, selector) {
            return [].filter.call(nodes,function(node) {
                return node.matches(selector);
            })[0];
        },


        /* convert hex, rgb or rgba colour to 6-digit hex notation */
        colourToHex: function(colour) {
            if (!colour) return;
            let result = colour;
            if (colour.indexOf("rgb")!==-1) {
                let [r,g,b] = colour.substring(colour.indexOf('(') + 1, colour.lastIndexOf(')')).split(",").map(Number);
                result = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            }
            return result.substr(0,7);
        },


        /* convert hex to rgba notation */
        hexToRgb: function(hex, alpha) {
            if (typeof alpha === 'undefined') alpha = 1;
            if (alpha>1) alpha /= 100;
            if (alpha<0) alpha = 0;
            let [r,g,b] = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
                .substring(1).match(/.{2}/g)
                .map(x => parseInt(x, 16));
            return 'rgba(' + [r,g,b,alpha].join(",") + ')';
        },


        /* get alpha from colour string */
        getAlpha: function(colour) {
            if (colour.indexOf('rgba') === 0) {
                let [r,g,b,a] = colour.substring(colour.indexOf('(') + 1, colour.lastIndexOf(')')).split(",").map(Number);
                return a;
            }
            return 1;
        },


        /* get a light or dark contrast colour given a rgb(a) value */
        getContrast: function(R, G, B, A) {
          if (!A) A = 1;
          const brightness = R * 0.299 + G * 0.587 + B * 0.114 + (1 - A) * 255;
          return brightness > 186 ? "#000000" : "#FFFFFF";
        },


        /* determine the colour black or white based on the specified colour */
        calculateContrast: function (hexa, hexb) {
            if (!hexa||hexa.indexOf('url')!==-1) return;
            if (hexa.indexOf('rgb')!==-1) hexa = this.colourToHex(hexa);
            if (hexa.indexOf('#')===-1)return;
            // get the rgb value of the first colour
            let [r,g,b] = hexa.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
                .substring(1).match(/.{2}/g)
                .map(x => parseInt(x, 16));
            // supplying a second colour averages the rgb value
            if (typeof hexb !== 'undefined') {
                if (hexb.indexOf('rgb')!==-1) hexb = this.colourToHex(hexb);
                let [rb,gb,bb] = hexb.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
                    .substring(1).match(/.{2}/g)
                    .map(x => parseInt(x, 16));
                let [r,g,b] = [(r + rb) / 2, (g + gb) / 2, (b + bb) / 2];
            }
            // return the contrasting colour for this rgba quad
            return this.getContrast(r,g,b,1);
        },



        /* helper function - replace using arrays of strings */
        replaceAll: function( str, findArray, replaceArray ) {
          let i, regex = [], map = {}; 
          for( i=0; i<findArray.length; i++ ){ 
            regex.push( findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g,'\\$1') );
            map[findArray[i]] = replaceArray[i]; 
          }
          regex = regex.join('|');
          str = str.replace( new RegExp( regex, 'g' ), function(matched){
            return map[matched];
          });
          return str;
        },


        /* used to generate a unique identifier for this instance of the picker */
        getRandomString: function(len) {
            len = len || 8;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
            var maxPos = $chars.length;
            var pwd = '';
            for (let i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        },


        /* create the input control that will display and store the colour value */
        createClickableControl: function () {
            var that = this;
            if (this.element.nodeName === 'INPUT' && (this.element.type === 'text' || this.element.type === 'color')) {
                this.previewElement = this.element;
                this.previewElement.type = 'text';
            } else {
                this.previewElement = document.createElement("input");
                this.previewElement.type = 'text';
                this.$element.empty().append(this.previewElement);
            }
            this.previewElement.classList.add("cpicker-preview-element");   
            this.updatePreview(this.settings.value);
            this.previewElement.onclick = function (e) {
                that.toggleColourPicker();
            }
        },


        /* hide or show the colour picker control surface, creating it if required */
        toggleColourPicker: function(hide) {
            [...document.querySelectorAll(`.cpicker-container:not(#${this.id})`)].forEach(div => {div.setAttribute('hidden',true) });
            if (!this.controlSurface) this.createControlSurface();
            if (!this.controlSurface.hasAttribute('hidden') || hide) {
                this.controlSurface.setAttribute('hidden',true);
            } else {
                this.controlSurface.removeAttribute('hidden');
            }
        },


        /* add the css for this script */
        injectCss: function() {
            if (!document.querySelector('link[id="cpicker"]')) {
                const link = document.createElement('link');
                link.id = 'cpicker';
                link.href = `data:text/css;base64,${btoa(CSS)}`;
                link.type = 'text/css';
                link.rel = 'stylesheet';
                document.getElementsByTagName('head')[0].appendChild(link);
            }
        },



        /* destroy this instance */
        destroyColourPicker: function() {
            var node = document.getElementById(this.id);
            node.parentNode.removeChild(node);
            this.inputs = {};
            this.controlSurface = undefined;
            this.imagePreview = undefined;
            this.gradientPreview = undefined;
        },


        /* generate and append the control surface html and cache useful pointers */
        createControlSurface: function () {
            const html = document.createRange().createContextualFragment(`
<div class='cpicker-container' hidden id='${this.id}'>
    <div class='cpicker-modeswitch cpicker-radio'>
        <div><input type='radio' name='cpicker-mode' value='solid' id='${this.id}a' checked><label for='${this.id}a'>Solid</label></div>
        <div><input type='radio' name='cpicker-mode' value='gradient' id='${this.id}b'><label for='${this.id}b'>Gradient</label></div>
        <div><input type='radio' name='cpicker-mode' value='image' id='${this.id}c'><label for='${this.id}c'>Image</label></div>
    </div>
    <div class='cpicker-mode-solid'>
        <div class='cpicker-flex cpicker-flex-between'>
            <label>Colour: <input type='color' value='#ffcc33' name='cpicker-single'></label>
            <label>Opacity: <input type='number' value='100' name='cpicker-single-opacity' min='0' max='100' step='5'></label>
        </div>
    </div>
    <div class='cpicker-mode-gradient'>
        <div class='cpicker-flex cpicker-checkers'>
            <input type='color' value='#000000' name='cpicker-from' title='Start colour'>
            <div class='cpicker-gradient-preview'><span/></div>
            <input type='color' value='#ffffff' name='cpicker-to' title='End colour'>
        </div>
        <div class='cpicker-row cpicker-flex cpicker-flex-between'>
            <input type='number' value='100' name='cpicker-from-opacity' min='0' max='100' step='5' title='Start opacity'>
            <input type='number' value='100' name='cpicker-to-opacity' min='0' max='100' step='5' title='End opacity'>
        </div>
        <div class='cpicker-row'>
            <span>Shape:</span>
            <div class='cpicker-radio'>
                <div><input type='radio' name='cpicker-shape' value='linear-gradient' id='${this.id}e' checked><label for='${this.id}e'>Straight</label></div>
                <div><input type='radio' name='cpicker-shape' value='radial-gradient' id='${this.id}d'><label for='${this.id}d'>Round</label></div>
            </div>
        </div>
        <div class='cpicker-row'>
            <span>Direction:</span>
            <div class='cpicker-radio'>
                <div><input type='radio' name='cpicker-direction' value='0' id='${this.id}f'><label for='${this.id}f'>&#8593;</label></div>
                <div><input type='radio' name='cpicker-direction' value='45' id='${this.id}g'><label for='${this.id}g'>&#8599;</label></div>
                <div><input type='radio' name='cpicker-direction' value='90' id='${this.id}h' checked><label for='${this.id}h'>&#8594;</label></div>
                <div><input type='radio' name='cpicker-direction' value='135' id='${this.id}i'><label for='${this.id}i'>&#8600;</label></div>
                <div><input type='radio' name='cpicker-direction' value='180' id='${this.id}j'><label for='${this.id}j'>&#8595;</label></div>
                <div><input type='radio' name='cpicker-direction' value='225' id='${this.id}k'><label for='${this.id}k'>&#8601;</label></div>
                <div><input type='radio' name='cpicker-direction' value='270' id='${this.id}l'><label for='${this.id}l'>&#8592;</label></div>
                <div><input type='radio' name='cpicker-direction' value='315' id='${this.id}m'><label for='${this.id}m'>&#8598;</label></div>
                <div><input type='radio' name='cpicker-direction' value='-1' id='${this.id}4'><label for='${this.id}4'>&#8277;</label></div>
            </div>
        </div>
    </div>
    <div class='cpicker-mode-image'>
        <div class='cpicker-row'>
            <img class='cpicker-img-preview'>
            <input type="file" hidden>
            <button onclick="this.previousElementSibling.click()">Upload</button>
        </div>
        <div class='cpicker-row'>
            <span>Position:</span>
            <div class='cpicker-radio'>
                <div><input type='radio' name='cpicker-position' value='top left' id='${this.id}n'><label for='${this.id}n'>tl</label></div>
                <div><input type='radio' name='cpicker-position' value='top center' id='${this.id}o'><label for='${this.id}o'>tc</label></div>
                <div><input type='radio' name='cpicker-position' value='top right' id='${this.id}p'><label for='${this.id}p'>tr</label></div>
                <div><input type='radio' name='cpicker-position' value='middle left' id='${this.id}q'><label for='${this.id}q'>ml</label></div>
                <div><input type='radio' name='cpicker-position' value='center' id='${this.id}r' checked><label for='${this.id}r'>c</label></div>
                <div><input type='radio' name='cpicker-position' value='middle right' id='${this.id}s'><label for='${this.id}s'>mr</label></div>
                <div><input type='radio' name='cpicker-position' value='bottom left' id='${this.id}t'><label for='${this.id}t'>bl</label></div>
                <div><input type='radio' name='cpicker-position' value='bottom center' id='${this.id}u'><label for='${this.id}u'>bc</label></div>
                <div><input type='radio' name='cpicker-position' value='bottom right' id='${this.id}v'><label for='${this.id}v'>br</label></div>
            </div>
        </div>
        <div class='cpicker-row'>
            <span>Repeat:</span>
            <div class='cpicker-radio'>
                <div><input type='radio' name='cpicker-repeat' value='no-repeat' id='${this.id}w'><label for='${this.id}w'>None</label></div>
                <div><input type='radio' name='cpicker-repeat' value='repeat-x' id='${this.id}x'><label for='${this.id}x'>&#8596;</label></div>
                <div><input type='radio' name='cpicker-repeat' value='repeat-y' id='${this.id}y'><label for='${this.id}y'>&#8597;</label></div>
                <div><input type='radio' name='cpicker-repeat' value='repeat' id='${this.id}z' checked><label for='${this.id}z'>All</label></div>
            </div>
        </div>
        <div class='cpicker-row'>
            <span>Size:</span>
            <div class='cpicker-radio'>
                <div><input type='radio' name='cpicker-size' value='auto' id='${this.id}1'><label for='${this.id}1'>1:1</label></div>
                <div><input type='radio' name='cpicker-size' value='100%' id='${this.id}2'><label for='${this.id}2'>Stretch</label></div>
                <div><input type='radio' name='cpicker-size' value='cover' id='${this.id}3' checked><label for='${this.id}3'>Cover</label></div>
            </div>
        </div>
    </div>
    <div class='cpicker-controls cpicker-flex'>
        <span><a class="cpicker-button-cancel">Cancel</a></span>
        <span><a class="cpicker-button-confirm">Select</a></span>
    </div>
</div>`);
            document.body.appendChild(html);
            this.controlSurface = document.getElementById(this.id);

            this.inputs = {};
            this.inputs.single = this.controlSurface.querySelector("input[name='cpicker-single']");
            this.inputs.singleo = this.controlSurface.querySelector("input[name='cpicker-single-opacity']");
            this.inputs.from = this.controlSurface.querySelector("input[name='cpicker-from']");
            this.inputs.fromo = this.controlSurface.querySelector("input[name='cpicker-from-opacity']");
            this.inputs.to = this.controlSurface.querySelector("input[name='cpicker-to']");
            this.inputs.too = this.controlSurface.querySelector("input[name='cpicker-to-opacity']");
            this.inputs.shapes = this.controlSurface.querySelectorAll("input[name='cpicker-shape']");
            this.inputs.directions = this.controlSurface.querySelectorAll("input[name='cpicker-direction']");
            this.inputs.positions = this.controlSurface.querySelectorAll("input[name='cpicker-position']");
            this.inputs.repeats = this.controlSurface.querySelectorAll("input[name='cpicker-repeat']");
            this.inputs.sizes = this.controlSurface.querySelectorAll("input[name='cpicker-size']");
            this.imagePreview = this.controlSurface.querySelector(".cpicker-img-preview");
            this.gradientPreview = this.controlSurface.querySelector(".cpicker-gradient-preview");

            this.setPosition();
            this.displayMode();
            this.updateFields();
            this.addListeners();


        },


        /* position the control surface next to the input field */
        setPosition: function () {
            if (!this.controlSurface) return;
            const ww = document.documentElement.clientWidth,
                  hh = document.documentElement.clientHeight,
                  pbox = this.previewElement.getBoundingClientRect();
            this.controlSurface.style.top = pbox.top + window.scrollY + 'px';
            this.controlSurface.style.left = pbox.left + window.scrollX + pbox.width + 'px'
        },


        /* figure out the correct display mode based on the input value */
        updateMode: function(data) {
            this.currentMode = 'solid';
            if (data.indexOf('url')!==-1) {
                this.currentMode = 'image';
            } else if (data.indexOf('-gradient')!==-1) {
                this.currentMode = 'gradient';
            }
            this.displayMode();
        },


        /* switches modes by hiding or showing dom nodes */
        displayMode: function() {
            if (!this.controlSurface) return;
            this.controlSurface.querySelector(".cpicker-modeswitch input[type='radio'][value='"+this.currentMode+"']").setAttribute("checked",true);
            $("#"+this.id+" [class^='cpicker-mode-']").hide();
            $("#"+this.id+" .cpicker-mode-"+this.currentMode).show();
        },


        /* update both the input control background image and value */
        updatePreview: function(data) {
            this.previewElement.style.background = data;
            this.previewElement.value = data;
        },


        /* displays the left-to-right gradient between the from and to colour pickers */
        showGradient: function() {
            let c = this.calculateColour(90);
            this.gradientPreview.style.background = c;
        },


        /* populates the fields in this instance with the relevant colour information */
        updateFields: function() {
            if (!this.controlSurface) return;
            let props = this.colourProperties(this.previewElement.value);
            switch (this.currentMode) {
                case "solid":
                    this.inputs.single.value = props.solid;
                    this.inputs.singleo.value = (props.solido * 100);
                    break;
                case "gradient":
                console.log(props);
                    this.inputs.from.value = props.from || props.solid || "#000000";
                    this.inputs.to.value = props.to || props.solid || "#ffffff";
                    this.inputs.fromo.value = (props.fromo * 100);
                    this.inputs.too.value = (props.too * 100);
                    this.one(this.inputs.shapes,"[value='" + props.shape + "']").setAttribute('checked',true);
                    this.one(this.inputs.directions,"[value='" + props.direction + "']").setAttribute('checked',true);
                    this.showGradient();
                    break;
                case "image":
                    this.one(this.inputs.sizes,"[value='" + props.size + "']").setAttribute('checked',true);
                    this.one(this.inputs.repeats,"[value='" + props.repeat + "']").setAttribute('checked',true);
                    this.one(this.inputs.positions,"[value='" + props.position + "']").setAttribute('checked',true);
                    this.imagePreview.src = props.url;
                    break;
            }
        },


        /* bind events to interface elements */
        addListeners: function () {
            const that = this;
            this.inputs.single.addEventListener('change', function (e) {
                that.selectColour(e.target.value);
            });

            this.inputs.from.addEventListener('change', function (e) {
                that.selectColour(e.target.value);
            });

            this.inputs.to.addEventListener('change', function (e) {
                that.selectColour(e.target.value,1);
            });

            this.controlSurface.addEventListener("change", (e) => {
                if (e.target && e.target.type && e.target.type === "file") {
                    if (e.target.files[0].type.indexOf("image/")===-1) return;
                    var reader = new FileReader();
                    reader.onload = function(obj) {
                        that.imagePreview.src = obj.target.result;
                        that.selectColour();
                    }
                    reader.readAsDataURL(e.target.files[0]);
                } else if (e.target && e.target.type) {
                    this.selectColour();
                }
                if (e.target === this.inputs.from || e.target === this.inputs.to || e.target === this.inputs.too || e.target === this.inputs.fromo) {
                    this.showGradient();
                }
            });

            this.controlSurface.addEventListener("click", (e) => {
                e.stopPropagation();
                if (e.target.type === 'radio' && e.target.name === 'cpicker-mode') {
                    this.currentMode = e.target.value;
                    return this.displayMode();
                } else if (e.target.classList.contains("cpicker-button-cancel")) {
                    this.updatePreview(that.settings.value); // initial value
                    this.toggleColourPicker();
                } else if (e.target.classList.contains("cpicker-button-confirm")) {
                    let colour = this.calculateColour();
                    this.updatePreview(colour);
                    this.toggleColourPicker();
                    if (this.settings.callback) this.settings.callback(colour, this.colourProperties(colour));
                }
            });
        },


        /* sets up the existing colour and then calls the preview */
        selectColour: function() {
            let colour = this.calculateColour();
            this.updatePreview(colour);
        },


        /* calculates properties of a colour string */
        colourProperties(value) {

            let gfrom = '', gto = '', colours;
            let brackettedValue = value.indexOf("(") !== -1
                        ?
                        value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'))
                        :
                        null;
            if (brackettedValue !== null && value.indexOf('base64') === -1) {
                if (brackettedValue.indexOf("(") === -1) {
                    colours = brackettedValue.split(",").map(Function.prototype.call, String.prototype.trim); // or map(s => { s.trim() })
                    gfrom = colours[1];
                    gto = colours[2];
                } else { // assuming rgb values and not supporting other colour types, and only supporting 2 stops
                    colours = brackettedValue.match(/rgba?\([^\)]*\)/gi);
                    gfrom = colours[0];
                    gto = colours[1];
                }
            }

            // normalise values to
            value = this.replaceAll(value,
                ['centre', 'to top', 'to right', 'to bottom', 'to left', 'middle center', 'center middle', 'left top', 'left middle', 'left bottom', 'center top', 'center center', 'center bottom', 'right top', 'right middle', 'right bottom'],
                ['center', '0',      '90',       '180',       '270',     'center',        'center',        'top left', 'middle left', 'bottom left', 'top center', 'center',        'bottom center', 'top right', 'middle right', 'bottom right']
            );
            let dir = value.match(/\(?\s?(\d{1,3})deg/);
            if (dir) dir = Number(dir[1]);
            if (!dir && value.indexOf('circle')!==-1) {
                dir = -1;
            }

            // ugly string finding
            let pos = value.includes('top left') ? 'top left' : value.includes('middle left') ? 'middle left' : value.includes('bottom left') ? 'bottom left' : value.includes('top center') ? 'top center' : value.includes('center') ? 'center' : value.includes('bottom center') ? 'bottom center' : value.includes('top right') ? 'top right' : value.includes('middle right') ? 'middle right' : value.includes('bottom right') ? 'bottom right' : '';
 
            let props = {
                node:   this.element,
                solid:  (value.indexOf("#") === 0 || value.indexOf("rgb") === 0)
                        ?
                        this.colourToHex(value) // could still be a gradient
                        :
                        '',

                solido: this.getAlpha(value),
                solidContrast: this.calculateContrast(value),

                shape: value.indexOf("radial-gradient") === 0
                        ?
                        "radial-gradient"
                        :
                        "linear-gradient",

                size:  (value.indexOf('cover') !== -1)
                        ?
                        "cover"
                        :
                        (value.indexOf('100%') !== -1)
                        ?
                        "100%"
                        : 
                        'auto',

                repeat: (value.indexOf('repeat-x') !== -1)
                        ?
                        "repeat-x"
                        :
                        (value.indexOf('repeat-y') !== -1)
                        ?
                        "repeat-y"
                        :
                        (value.indexOf('repeat') !== -1)
                        ?
                        "repeat"
                        :
                        'no-repeat',

                url:    value.indexOf('url(') !== -1
                        ?
                        brackettedValue
                        :
                        'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=', // http://disq.us/p/d5a8xb

                from:   this.colourToHex(gfrom),
                fromo:  this.getAlpha(gfrom),
                to:     this.colourToHex(gto),
                too:    this.getAlpha(gto), 
                position: pos,
                direction: dir,
                gradientContrast: this.calculateContrast(gfrom, gto),
            }
            return props;

        },


        /* calculates a colour based on the dislpayMode (solid, gradient, image) */
        calculateColour: function(altDirection) {
            let colour = this.settings.value,
                direction = 'center';

            switch (this.currentMode) {
                case "solid":
                    colour = this.inputs.single.value;
                    let alpha = (this.inputs.singleo.value / 100);
                    if (alpha < 1) colour = this.hexToRgb(colour, alpha);
                    break;

                case "gradient":
                    let shape = this.getChecked(this.inputs.shapes).value,
                        direction = Number(this.getChecked(this.inputs.directions).value),
                        cFrom = this.inputs.from.value,
                        aFrom = (this.inputs.fromo.value / 100),
                        cTo = this.inputs.to.value,
                        aTo = (this.inputs.too.value / 100);
                    if (aFrom < 1) cFrom = this.hexToRgb(cFrom,aFrom);
                    if (aTo < 1) cTo = this.hexToRgb(cTo,aTo);
                    if (shape === "radial-gradient" && !altDirection) {
                        switch (direction) {
                            case -1: direction = "circle at center"; break;
                            case 0: direction = "circle at top center"; break;
                            case 45: direction = "circle at top right"; break;
                            case 90: direction = "circle at right"; break;
                            case 135: direction = "circle at bottom right"; break;
                            case 180: direction = "circle at bottom"; break;
                            case 225: direction = "circle at bottom left"; break;
                            case 270: direction = "circle at left"; break;
                            case 315: direction = "circle at top left"; break;
                        }
                        colour = "radial-gradient(" + [direction,cFrom + " 1%", cTo + " 99%"].join(", ") + ")";
                    } else {
                        if (altDirection) direction = altDirection;
                        colour = "linear-gradient(" + [direction+"deg",cFrom + " 1%", cTo + " 99%"].join(", ") + ")";
                    }
                    break;

                case "image":
                    let repeat = this.getChecked(this.inputs.repeats).value,
                        position = this.getChecked(this.inputs.positions).value,
                        size = this.getChecked(this.inputs.sizes).value;
                    colour = "url(" + this.imagePreview.src + ") " + repeat + " " + position + " / " + size;
                    break;
            }
            return colour;
        }
    }
    window.CPicker = CPicker;
})(window, XNQuery)
