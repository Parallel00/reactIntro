const NAME_LENGTH_LIMIT = 6;

function figur({age, name, interests}){
	const voteUrge = age >= 18
		? "Please go vote!"
		: "You must be 18" :
	const interestII = interests.map(interest => <li>{interest}</li>);
	
	return(
		<div>
			<ul>
				<li>Name: {name.slice(0, NAME_LENGTH_LIMIT)}</li>
				<li>Age: {age}</li>
				<ul>
					Interests:
					{interestII}
				</ul>
			</ul>
		</div>
	);
}