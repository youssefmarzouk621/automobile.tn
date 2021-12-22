var Comparator = /** @class */ (function () {
    function Comparator(config) {
        if (config === void 0) { config = { onLabel: "Comparer", offLabel: "Comparer" }; }
        var _this = this;
        this.config = config;
        $(document).on('click', '.comparable', function (e) {
            var element = $(e.target);
            var present = $(element).data("present");
            var id = $(element).data("id");
            var href = $(element).attr('href');
            console.dir(present);
            if (present == 1) {
                var url = href + '?mode=del&id=' + id;
                $.post(url, function () {
                    $(element).text(_this.config.onLabel);
                    showSuccess('Véhicule supprimé du <a href="' + href + '"><u>comparateur</u></a>');
                    $(element).data('present', 0);
                });
            }
            else {
                var url = href + '?mode=add&id=' + id;
                $.post(url, function () {
                    $(element).text(_this.config.offLabel);
                    showSuccess('Véhicule ajouté au <a href="' + href + '"><u>comparateur</u></a>');
                    $(element).data('present', 1);
                });
            }
            console.log('Clicked', present, id, $(e));
            e.preventDefault();
            return false;
        });
    }
    return Comparator;
}());
