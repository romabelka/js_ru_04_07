export function selectFilter(select, articles) {
  if(!select.length) return articles
  return select.map(function(item) {
    for(let article of articles) {
      if(article.id == item.value ) return article
    }
  })
}


export function dateFilter(range, articles) {
  if(!range.from && !range.to) return articles

  let filtered = [];
  const from = Date.parse(range.from);
  const to = Date.parse(range.to);

  for(let article of articles) {
    let articleDate = Date.parse(article.date);
    if(from<=articleDate && to>=articleDate) {
      filtered.push(article);
    }
  }
  return filtered
}
