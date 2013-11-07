/*
 * jQuery Genealogy
 * https://github.com/spicyj/jquery-genealogy
 *
 * Copyright (c) 2011 Ben Alpert
 * Released under the MIT License
 */

(function($) {
    $.fn.extend({
        grandchildren: function() {
            return this.children().children();
        },

        greatGrandchildren: function() {
            return this.grandchildren().children();
        },

        nthGrandchildren: function (n) { //
            var nthGrandchildren = this.children();
            while (n-- > 0) {
                nthGrandchildren = nthGrandchildren.children();
            }
            return nthGrandchildren;
        },

        grandparent: function() {
            return this.parent().parent();
        },

        greatGrandparent: function() {
            return this.grandparent().parent();
        },

        nthGrandparent: function (n) { //
            var nthGrandparent = this.parent();
            while (n-- > 0) {
                nthGrandparent = nthGrandparent.parent();
            }
            return nthGrandparent;
        },

        aunts: function() {
            return this.parent().siblings();
        },

        greatAunts: function () {
            return this.parent().aunts();
        },

        nthGreatAunts: function (n) {
            return this.nthGrandparent(n).siblings();
        },

        prevAunt: function() {
            return this.parent().prev();
        },

        prevAunts: function() {
            return this.parent().prevAll();
        },

        nextAunt: function() {
            return this.parent().next();
        },

        nextAunts: function() {
            return this.parent().nextAll();
        },

        oldestSibling: function() {
            return this.olderSiblings().first();
        },

        youngestSibling: function () {
            return this.youngerSiblings().last();
        },

        cousins: function() {
            return this.aunts().children();
        },

        prevCousins: function() {
            // Return closest cousins first (by document order)
            return this.prevAunts().map( function () {
                return $( this ).children().get().reverse();
            } );
        },

        nextCousins: function() {
            return this.nextAunts().children();
        },

        secondCousins: function(){
            return this.grandparent().siblings().grandchildren();
        },

        thirdCousins: function() {
            return this.greatGrandparent().siblings().greatGrandchildren();
        },

        nthCousins: function(n) {
            return this.nthGrandparent(n - 1).siblings().nthGrandchildren(n - 1);
        },

        nthCousinsMthRemoved: function (n, m) {
            return n.nthCousins(n).nthGrandchildren(m - 1).add(n.nthGrandparent(m - 1).nthCousins(n));
        },

		nieces: function() {
			return this.siblings().children();
		},

		greatNieces: function() {
		    return this.siblings().grandchildren();
		},

		nthGreatNieces: function (n) {
		    return this.siblings().nthGrandchildren(n);
		},

		prevNieces: function() {
			// Return closest nieces first (by document order)
			return this.prevAll().map( function () {
				return $( this ).children().get().reverse();
			} );
		},

		nextNieces: function() {
			return this.nextAll().children();
		}
	});

	$.fn.uncles = $.fn.aunts;
	$.fn.greatUncles = $.fn.greatAunts; //
	$.fn.nthGreatUncles = $.fn.nthGreatAunts; //
	$.fn.prevUncle = $.fn.prevAunt;
	$.fn.prevUncles = $.fn.prevAunts;
	$.fn.nextUncle = $.fn.nextAunt;
	$.fn.nextUncles = $.fn.nextAunts;

	$.fn.nephews = $.fn.nieces;
	$.fn.greatNephews = $.fn.greatNieces; //
	$.fn.nthGreatNephews = $.fn.nthGreatNieces; //
	$.fn.prevNephews = $.fn.prevNieces;
	$.fn.nextNephews = $.fn.nextNieces;

	$.fn.brothers = $.fn.sisters = $.fn.siblings;
	$.fn.olderBrothers = $.fn.olderSisters = $.fn.olderSiblings = $.fn.prevAll; //
	$.fn.youngerBrothers = $.fn.youngerSisters = $.fn.youngerSiblings = $.fn.nextAll; //
	$.fn.youngestBrother = $.fn.youngestSister = $.fn.youngestSibling; //
	$.fn.oldestBrother = $.fn.oldestSister = $.fn.oldestSibling; //

	$.fn.sons = $.fn.daughters = $.fn.children; //
	$.fn.father = $.fn.mother = $.fn.parent;
})(jQuery);
