import React from 'react';
import './QuizInputs.scss';
import { Form, Field, Formik } from 'formik';
import InputsSchema from './InputsSchema';

const QuizInputs = () => {
  return (
    <div>
      <Formik
        initialValues={{
          month: '',
          year: '',
        }}
        validateOnChange={true}
        validationSchema={InputsSchema}
        onSubmit={() => {}}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="quiz__inputs-wrapper">
              <div className="input__wrapper">
                <Field type="text" name="month" className="quiz__input" placeholder="mm" />
                {touched.month && errors.month && <p className="error__message">{errors.month}</p>}
              </div>

              <div className="input__wrapper">
                <Field type="text" name="year" className="quiz__input" placeholder="yyyy" />
                {touched.year && errors.year && <p className="error__message">{errors.year}</p>}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuizInputs;
