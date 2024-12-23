(function() {
  const segment = 1;
  const l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, segment + 1).join('/') + '/?/' +
    l.pathname.slice(1).split('/').slice(segment).join('/').replace(/&/g, '~and~') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  );
}()); 