export enum ToastType {
	success = "success",
	error = "error",
	info = "info",
	warning = "warning",
}

type stringEnum = keyof typeof ToastType;

// type ToastConfig = {
// 	type: stringEnum;
// 	message: string;
// 	delay?: number;
// };

class ToastConfig {
	constructor(
		public type: stringEnum,
		public message: string,
		public delay?: number
	) {}
}

export default ToastConfig;
