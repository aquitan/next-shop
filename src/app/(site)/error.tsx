'use client'

const RootError = ({ error }: { error: Error }) => {
	console.log('error', error)

	return (
		<div>
			<h1>Error 404</h1>
		</div>
	)
}

export default RootError;