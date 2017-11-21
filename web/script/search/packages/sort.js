define(function() {
  
  function starsSorter (a, b) {
    if (a.stars && !b.stars) return -1;
    if (b.stars && !a.stars) return 1;
    return +b.stars - (+a.stars);
  }

  function featuredSorter (a, b) {
    if (a.featured && !b.featured) return -1;
    if (b.featured && !a.featured) return 1;
    return 0;
  }

  function sorter (a, b) {
    var first = featuredSorter(a, b);
    if (first) return first;
    return starsSorter(a, b);
  }
  
  return sorter;
  
});