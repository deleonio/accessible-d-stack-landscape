import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ErrorListPropType, Iso8601 } from '@public-ui/components';
import {
	KolButton,
	KolButtonLink,
	KolForm,
	KolHeading,
	KolInputCheckbox,
	KolInputColor,
	KolInputDate,
	KolInputEmail,
	KolInputFile,
	KolInputNumber,
	KolInputPassword,
	KolInputRadio,
	KolInputRange,
	KolInputText,
	KolSelect,
	KolTextarea,
} from '@public-ui/react';
import { useState } from 'react';
import { z } from 'zod';

type FormModel = {
	inputText: string;
	inputCheckbox: true | null;
	inputColor: string;
	inputDate: Iso8601 | null;
	inputEmail: string;
	inputFile: FileList | null;
	inputNumber: number | null;
	inputPassword: string;
	inputRange: number | undefined;
	inputRadio: string;
	select: string;
	textarea: string;
	button: string;
	buttonLink: string;
};

const validationSchema = z.object({
	inputText: z.string().min(3),
	inputEmail: z.string().email(),
	select: z.literal('Rio de Janeiro'),
});

function App() {
	const [submittedValues, setSubmittedValues] = useState<FormModel | null>(null);

	const {
		register,
		control,
		handleSubmit,
		watch,
		formState: { errors, isDirty },
	} = useForm<FormModel>({
		defaultValues: {
			inputText: '',
			inputCheckbox: null,
			inputColor: '',
			inputDate: null,
			inputEmail: '',
			inputFile: null,
			inputNumber: null,
			inputPassword: '',
			inputRange: undefined,
			inputRadio: '',
			select: 'Rosenheim',
			textarea: '',
			button: 'button value',
			buttonLink: 'buttonLink value',
		},
		resolver: zodResolver(validationSchema),
	});

	function createErrorList(formErrors: Record<string, { message?: string } | undefined>): ErrorListPropType[] {
		return Object.keys(formErrors)
			.filter((fieldName) => formErrors[fieldName]?.message)
			.map((fieldName) => ({
				message: `${fieldName}: ${formErrors[fieldName]?.message || ''}`,
				selector: `#field-${fieldName}`,
			}));
	}

	const onSubmit = (values: FormModel) => {
		setSubmittedValues(values);
	};

	const handleFormSubmit = (event: Event) => {
		void handleSubmit(onSubmit)(event as any);
	};

	return (
		<div className="App mx-auto max-w-800px p-16">
			{submittedValues && (
				<div className="mb-8">
					<KolHeading _label="Submitted Values"></KolHeading>
					<pre>{JSON.stringify(submittedValues, null, 2)}</pre>
				</div>
			)}

			<KolHeading _label="Form"></KolHeading>

			<KolForm
				_errorList={isDirty ? createErrorList(errors) : undefined}
				_on={{
					onSubmit: handleFormSubmit,
				}}
			>
				<div className="grid gap-lg">
					<KolInputText
						_label="Text"
						_value={watch('inputText')}
						_name="inputText"
						id="field-inputText"
						_touched={isDirty}
						_msg={{
							_type: 'error',
							_description: errors.inputText?.message || '',
						}}
						{...register('inputText')}
					/>

					<Controller
						name="inputCheckbox"
						control={control}
						render={({ field, fieldState: { error } }: any) => (
							<KolInputCheckbox
								_label="Checkbox"
								_name="inputCheckbox"
								id="field-inputCheckbox"
								_touched={isDirty}
								_msg={{
									_type: 'error',
									_description: error?.message || '',
								}}
								_on={{
									onInput: (event, value) => {
										field.onChange(value as true | null);
									},
									onBlur: field.onBlur,
								}}
							/>
						)}
					/>

					<KolInputColor
						_label="Color"
						_value={watch('inputColor')}
						_name="inputColor"
						id="field-inputColor"
						_touched={isDirty}
						_msg={{
							_type: 'error',
							_description: errors.inputColor?.message || '',
						}}
						{...register('inputColor')}
					/>

					<KolInputDate
						_label="Date"
						_value={watch('inputDate')}
						_name="inputDate"
						id="field-inputDate"
						_touched={isDirty}
						_msg={{
							_type: 'error',
							_description: errors.inputDate?.message || '',
						}}
						{...register('inputDate')}
					/>

					<KolInputEmail
						_label="Email"
						_value={watch('inputEmail')}
						_name="inputEmail"
						id="field-inputEmail"
						_touched={isDirty}
						_msg={{
							_type: 'error',
							_description: errors.inputEmail?.message || '',
						}}
						{...register('inputEmail')}
					/>

					<Controller
						name="inputFile"
						control={control}
						render={({ field, fieldState: { error } }: any) => (
							<KolInputFile
								_label="File"
								_name="inputFile"
								id="field-inputFile"
								_touched={isDirty}
								_msg={{
									_type: 'error',
									_description: error?.message || '',
								}}
								_on={{
									onInput: (event, value) => {
										field.onChange(value as FileList);
									},
									onBlur: field.onBlur,
								}}
							/>
						)}
					/>

					<KolInputNumber
						_label="Number"
						_value={watch('inputNumber')}
						_name="inputNumber"
						id="field-inputNumber"
						_touched={isDirty}
						_msg={{
							_type: 'error',
							_description: errors.inputNumber?.message || '',
						}}
						{...register('inputNumber')}
					/>

					<KolInputPassword
						_label="Password"
						_value={watch('inputPassword')}
						_name="inputPassword"
						id="field-inputPassword"
						_touched={isDirty}
						_msg={{
							_type: 'error',
							_description: errors.inputPassword?.message || '',
						}}
						{...register('inputPassword')}
					/>

					<Controller
						name="inputRange"
						control={control}
						render={({ field, fieldState: { error } }: any) => (
							<KolInputRange
								_label="Range"
								_value={field.value}
								_name="inputRange"
								id="field-inputRange"
								_touched={isDirty}
								_msg={{
									_type: 'error',
									_description: error?.message || '',
								}}
								_on={{
									onInput: (event, value) => {
										field.onChange(value as number);
									},
									onBlur: field.onBlur,
								}}
							/>
						)}
					/>

					<Controller
						name="inputRadio"
						control={control}
						render={({ field, fieldState: { error } }: any) => (
							<KolInputRadio
								_label="Radio"
								_orientation="horizontal"
								_options={[
									{ label: 'New York', value: 'New York' },
									{ label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
									{ label: 'Rosenheim', value: 'Rosenheim' },
								]}
								_value={field.value}
								_name="inputRadio"
								id="field-inputRadio"
								_touched={isDirty}
								_msg={{
									_type: 'error',
									_description: error?.message || '',
								}}
								_on={{
									onInput: (event, value) => {
										field.onChange(value as string);
									},
									onBlur: field.onBlur,
								}}
							/>
						)}
					/>

					<Controller
						name="select"
						control={control}
						render={({ field, fieldState: { error } }: any) => (
							<KolSelect
								_label="Select"
								_options={[
									{ label: 'New York', value: 'New York' },
									{ label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
									{ label: 'Rosenheim', value: 'Rosenheim' },
								]}
								_value={field.value}
								_name="select"
								id="field-select"
								_touched={isDirty}
								_msg={{
									_type: 'error',
									_description: error?.message || '',
								}}
								_on={{
									onInput: (event, selectedValues: unknown) => {
										field.onChange((selectedValues as string[])[0]);
									},
									onBlur: field.onBlur,
								}}
							/>
						)}
					/>

					<KolTextarea
						_label="Textarea"
						_value={watch('textarea')}
						_name="textarea"
						id="field-textarea"
						_touched={isDirty}
						_msg={{
							_type: 'error',
							_description: errors.textarea?.message || '',
						}}
						{...register('textarea')}
					/>

					<div className="mt">
						<KolButton _label="Button" _value={watch('button')} _name="button" id="field-button" _type="submit" />
						<KolButtonLink _label="ButtonLink" _value={watch('buttonLink')} _name="buttonLink" id="field-buttonLink" _type="submit" className="ml" />
					</div>

					<KolButton className="mt w-fit" _label="Submit" _type="submit"></KolButton>
				</div>
			</KolForm>
		</div>
	);
}

export default App;
