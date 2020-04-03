import * as React from 'react';

export interface HeaderProps { name: string}

export const Header = (props: HeaderProps) => <h1>Header name is {props.name}!</h1>;