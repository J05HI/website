// Based on https://github.com/mrzmmr/rehype-wrap
import { Node } from 'unist'
import visit from 'unist-util-visit'
// @ts-ignore
import { selectAll } from 'hast-util-select'
// @ts-ignore
import parseSelector from 'hast-util-parse-selector'

/*
 * Attacher
 */
export const rehypeResposiveTables = (
  selector: string,
  tableWraper: string,
  parentWrapper: string
) => {
  /*
   * Transformer
   */
  return (tree: Node) => {
    const selectedNodes: Node[] = selectAll(selector, tree)
    const parentContainer: Node = parseSelector(parentWrapper)
    const tableContainer: Node = parseSelector(tableWraper)

    selectedNodes.forEach((selected) => {
      visit(tree, selected, (_, i, parent) => {
        tableContainer.children = [selected]
        parentContainer.children = [tableContainer]
        ;(parent.children as Node[])[i] = parentContainer
      })
    })
  }
}
