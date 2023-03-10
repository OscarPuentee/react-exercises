import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Button({action, label}) {
  return (
		<button onClick={action}>
			{label}
		</button>
	);
}