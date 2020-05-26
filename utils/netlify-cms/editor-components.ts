import { nanoid } from 'nanoid'
import { EditorComponentOptions } from 'netlify-cms-core'

interface ImageComponent {
  id: string
  src: string
  width: string
  height: string
  alt: string
}

interface EquationComponent {
  id: string
  equation: string
}

export const blogImageEditorComponent: EditorComponentOptions = {
  // Internal id of the component
  id: 'blog-image',
  // Visible label
  label: 'Blog Image',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: 'src', label: 'Source', widget: 'image' },
    { name: 'alt', label: 'Alt Text', widget: 'string' },
    // @ts-ignore
    { name: 'width', label: 'Width', widget: 'number', valueType: 'int' },
    // @ts-ignore
    { name: 'height', label: 'Height', widget: 'number', valueType: 'int' },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<blog-image src="(.*)" width="(\d+)" height="(\d+)" alt="(.*)"><\/blog-image>/,
  // Function to extract data elements from the regexp match
  fromBlock(match) {
    return {
      id: nanoid(),
      src: match[1],
      width: match[2],
      height: match[3],
      alt: match[4],
    }
  },
  // function to create a text block from an instance of this component
  // @ts-ignore
  toBlock(obj: ImageComponent) {
    return `<blog-image src="${obj.src}" width="${obj.width}" height="${obj.height}" alt="${obj.alt}"></blog-image>`
  },
  // preview output for this component
  // @ts-ignore
  toPreview(obj: ImageComponent, getAsset: Function, fields?: any[]) {
    const imageField = fields?.find((f) => f.get('widget') === 'blog-image')
    const src = getAsset(obj.src, imageField)

    return `<img src="${src || ''}"
    width="${obj.width}"
    height="${obj.height}"
    alt="${obj.alt}"
    class="img-fluid" />`
  },
}

export const blogMathEquationEditorComponent: EditorComponentOptions = {
  id: 'blog-inline-math-equation',
  // Visible label
  label: 'Inline Math Equation',
  fields: [{ name: 'equation', label: 'Equation', widget: 'string' }],
  pattern: /^(\$)(.*)(\$)/,
  fromBlock(match) {
    return {
      id: nanoid(),
      equation: match[2],
    }
  },
  // @ts-ignore
  toBlock(obj: EquationComponent) {
    return `$${obj.equation}$`
  },
  // @ts-ignore
  toPreview(obj: EquationComponent) {
    const src = `https://render.githubusercontent.com/render/math?math=${encodeURIComponent(
      obj.equation
    )}`

    return `<img src="${src}" alt="${obj.equation}" class="mt-2 mb-4 img-fluid inline" />`
  },
}
