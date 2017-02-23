String.prototype.strip = function(char) {
    return this.replace(new RegExp("^" + char + "*"), '').
        replace(new RegExp(char + "*$"), '');
}


$.extend_if_has = function(desc, source, array) {
    for (var i=array.length;i--;) {
        if (typeof source[array[i]] != 'undefined') {
            desc[array[i]] = source[array[i]];
        }
    }
    return desc;
};


(function($) {
    $.fn.terminalGUI = function(eval, options) {
        if ($('body').data('terminalGUI')) {
            return $('body').data('terminalGUI').terminal;
        }
        this.addClass('terminalGUI');
        options = options || {};
        eval = eval || function(command, term) {
            term.echo("you don't set eval for terminalGUI");
        };
        var settings = {
            prompt: 'core&#64;romelvera.com> ',
            name: 'Core Terminal',
            height: 768,
            enabled: false,
            greetings: ('Core Terminal\n'+
                  'v1.0c\n')
,
            keypress: function(e) {
                if (e.which == 44) {
                    return false;
                }
            }
        };
        if (options) {
            $.extend(settings, options);
        }
        this.append('<div class="td"></div>');
        var self = this;
        self.terminal = this.find('.td').terminal(eval, settings);
        var focus = false;
        $(document.documentElement).keypress(function(e) {
            if (e.which == 44) {
                self.slideToggle('fast');
                self.terminal.focus(focus = !focus);
                self.terminal.attr({
                    scrollTop: self.terminal.attr("scrollHeight")
                });
            }
        });
        $('body').data('terminalGUI', this);
        this.hide();
        return self;
    };
})(jQuery);

//--------------------------------------------------------------------------
jQuery(document).ready(function($) {
    $('#terminalGUI').terminalGUI(App, {
		onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true //enable tab completition like linux tab
    });
});
