/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
	stringify(node) {
		if (node === null) return ''
		return `{"val":${node.val},"children":[${node.children.length ? node.children.map(child => this.stringify(child)) : ``}]}`
	}

	serialize(root) {
		return this.stringify(root)
	}

	parse(data) {
		let i = 0

		while (data[i] !== ':') i++

		const valStart = i + 1

		while (data[i] !== ',') i++

		const valString = data.substring(valStart, i)
		const val = parseInt(valString)

		while (data[i] !== '[') i++

		const childrenStart = i + 1
		const childrenEnd = data.length - 2
		const children = []

		let level = 0
		let nodeStart
		let nodeEnd

		i = childrenStart

		while (i < childrenEnd) {
			if (data[i] === '{') {
				if (nodeStart === undefined) nodeStart = i
				level--
			} else if (data[i] === '}') {
				nodeEnd = i + 1
				level++
			}

			if (level === 0 && nodeStart !== undefined) {
				const childString = data.substring(nodeStart, nodeEnd)
				const child = this.parse(childString)

				children.push(child)
				nodeStart = undefined
			}

			i++
		}

		return new Node(val, children)
	}

	deserialize(data) {
		if (data === '') return null
		return this.parse(data)
	}
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));