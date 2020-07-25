export const loadIntersectionObserver = async () => {
  if (process.client) {
    if (
      !(
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
      )
    ) {
      await import(
        // @ts-ignore
        /* webpackChunkName: 'intersection-observer' */ 'intersection-observer'
      )
    }
  }
}
