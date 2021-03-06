import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './styles/Palette.css';

export default class Palette extends Component {
	state = { level: 500, format: 'hex' };
	changeLevel = (newLevel) => {
		this.setState({ level: newLevel });
	};
	changeFormat = (val) => {
		this.setState({ format: val });
	};
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox color={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} />
		));
		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} handleFormatChange={this.changeFormat} />
				<div className="Palette-colors">{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
