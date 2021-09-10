type Page = "Home" | "About" | "Contact" | "awaiting" 

export type input = string | null

export interface contextData {
	currentPage: Page
}

export interface contextProps {
	contextData: contextData
	setContextData: (data: contextData) => void
}

export interface buttonProps {
	state: boolean
	MedName: string
}

export interface searchBarProps {
	input: (data: input) => void
	buttonState: boolean
	setButtonState: (state: boolean) => void
}

export interface fetchedMedsProps {
	input: input
}

export interface RiskBoxProps {
	buttonState: boolean
}