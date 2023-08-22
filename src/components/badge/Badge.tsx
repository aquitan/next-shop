
type Props = {
	discount?: number,
	status: boolean
}

const Badge = ({ discount, status }: Props) => {
	return (
		<div>
			{discount ? '-' : ''}
			{discount ? discount : ''}
			{status ? 'New' : null}
		</div>
	)
}

export default Badge;