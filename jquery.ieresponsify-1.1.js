;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "IEResponsify",
        defaults = {
            viewport: "1240up",
            classPrefix: "ie"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.$el = $(element);
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var self = this;
			var IELayout = _.debounce(function() {
				self.setViewport();
				self.fixIE();
			}, 100);
			$(window).on('resize', IELayout);
			self.setViewport();
			self.fixIE();
        },
        setViewport: function() {
            /* if is above or equal to 768px */
            if (this.getViewport() >= 768) {
                this.options.viewport = '768up';
            }
            /* if is above or equal to 1030px */
            if (this.getViewport() >= 1030) {
                this.options.viewport = '1030up';
            }
            /* if is above or equal to 1240px */
            if (this.getViewport() >= 1240) {
                this.options.viewport = '1240up';
            }
        },
        getViewport: function() {
            return $(window).width();
        },
        fixIE: function() {
            if(!this.isSupported()) {
                this.removeIEClass();
                this.addIEClass();
            }
        },
        isSupported: function() {
            return Modernizr.mq('only all');
        },
        addIEClass: function() {
            this.$el.addClass(this.options.classPrefix+this.options.viewport);
        },
        removeIEClass: function() {
            this.$el.removeClass(function (index, css) {
                return (css.match (/\bie\S+/g) || []).join(' ');
            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
