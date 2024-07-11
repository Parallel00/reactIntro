function Post({date, msg, name, username}){
	return(
		<div className="post">
			<span>{name}</span>
			<span className="username">{username}</span>
			<span className="date">{date}</span>
			<p>{msg}</p>
		</div>
	);
}