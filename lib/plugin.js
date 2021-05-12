import fs from 'fs'
import { join } from 'path'
import sizeOf from 'image-size'

const cache = {}

export function getPluginPreviewImage(file) {
  
  // isolate the file name using regex
  let m = file.match(/([^:\\/]*?)(?:\.([^ :\\/.]*))?$/)
  let fileExt = (m === null)? "" : m[0]
  let fileName  = (m === null)? "" : m[1]
 
  let pluginName = fileName

  if (cache[pluginName]) {
    return cache[pluginName]
  }

  const previewImageSrc = fs
    .readdirSync(join(process.cwd(), 'public', 'store'))
    .find((f) => f.includes(pluginName))

  if (!previewImageSrc) {
    return null
  }

  const dimensions = sizeOf(
    join(process.cwd(), 'public', 'store', previewImageSrc)
  )

  const imageInfo = {
    src: `/store/${previewImageSrc}`,
    isGIF: previewImageSrc.split('.').pop() == 'gif',
    width: dimensions.width,
    height: dimensions.height,
  }

  cache[pluginName] = imageInfo

  return imageInfo
}
