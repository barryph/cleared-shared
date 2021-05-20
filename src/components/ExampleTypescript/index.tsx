import * as React from 'react';

interface ComponentProps {
	message: string;
}

const ExampleTypescript = ({ message }: ComponentProps) => {
	return (
		<div>
			<div>This is a shared <strong>TypeScript</strong> component!</div>
			<div>{ message }</div>
		</div>
	);
};

export default ExampleTypescript;
