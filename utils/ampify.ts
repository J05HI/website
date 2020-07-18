import hashSum from 'hash-sum'
// @ts-ignore
import AmpOptimizer from '@ampproject/toolbox-optimizer'
// @ts-ignore
import AmpCustom from 'amp-custom'
import cheerio from 'cheerio'
import consola from 'consola'
import postcss from 'postcss'
// @ts-ignore
import postcssRemove from 'postcss-remove-classes'

/**
 *
 * @param {boolean} debug
 * @param {string} html
 */
export const ampify = async (debug: boolean, html: string) => {
  const ampCustom = new AmpCustom()
  const ampOptimizer = AmpOptimizer.create()
  const $ = cheerio.load(html, { decodeEntities: true })

  /* fix SVG Images */
  // Remove the pid attribute
  $('path').removeAttr('pid').removeAttr('_fill')

  $('g').removeAttr('_stroke').removeAttr('_fill')

  /* remove math element */
  $('math').remove()

  /* fix aria-hidden attribute */
  // TODO: this must be fixed with rehype?
  $('[ariahidden]').each(function (this: any) {
    $(this).attr('aria-hidden', `${$(this).attr('ariahidden')}`)
    $(this).removeAttr('ariahidden')
  })

  $('a[tab-index]').each(function (this: any) {
    $(this).removeAttr('tab-index')
  })

  /* improve style definitions */
  let styleConcat = ''

  $('style').each(function (this: any) {
    styleConcat += $(this).html()
  })

  $('style').remove()

  const cleanCSS = await postcss([
    postcssRemove([
      'dark-mode',
      'prose-dark',
      'prose-lg',
      'prose-xl',
      'sm\\:prose-dark',
      `sm:prose-dark`,
      'md\\:prose-dark',
      'md:prose-dark',
      'lg\\:prose-dark',
      'lg:prose-dark',
      'xl\\:prose-dark',
      'xl:prose-dark',
      'sm\\:prose',
      'sm\\:prose-lg',
      'sm\\:prose-xl',
      'md\\:prose',
      'md\\:prose-lg',
      'md\\:prose-xl',
      'lg\\:prose',
      'lg\\:prose-xl',
      'xl\\:prose',
      'xl\\:prose-lg',
    ]),
  ]).process(styleConcat)
  styleConcat = ampCustom.optimize(cleanCSS.css)

  if (debug && ampCustom.isOverMaxByte(styleConcat)) {
    consola.warn("The CSS string size doesn't meets the AMP rules (50KB)")
  }

  html = $.html().replace(
    '</head>',
    `<style amp-custom id="${hashSum(
      styleConcat
    )}">${styleConcat}</style></head>`
  )

  const optimizedHtml = await ampOptimizer.transformHtml(html)

  return optimizedHtml
}
