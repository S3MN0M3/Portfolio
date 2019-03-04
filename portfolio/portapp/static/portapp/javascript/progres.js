var progressBarContainer = $('#progress-bar');
var progressBar = {
    chain: [],
    progress: progressBarContainer.children('progress'),
    progressBar: progressBarContainer.find('.progress-bar'),
    progressInfo: progressBarContainer.children('.progress-info'),
    set: function(value, info, noPush) {
        if(!noPush) {
            this.chain.push(value);
        }
        if(this.chain[0] == value) {
            this.go(value, info);
        }
        else {
            var self = this;
            setTimeout(function() {
                self.set(value, info, true)
            }, 200);
        }
    },
    go: function(value, info) {
        this.progressInfo.text(info);
        var self = this;
        var interval = setInterval(function() {
            var curr = self.progress.attr('value');
            if(curr >= value) {
                clearInterval(interval);
                self.progress.attr('value', value);
                self.progressBar.css('width', value + '%');
                self.chain.shift()
            }
            else {
                self.progress.attr('value', ++curr);
                self.progressBar.css('width', curr + '%');
            }
        }, 5)
    }