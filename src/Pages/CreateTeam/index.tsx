import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import "./styles.css";
import Header from "../../Components/Header/index";

const CreateTeamSchema = Yup.object().shape({
  name: Yup.string(),
  description: Yup.string(),
  website: Yup.string(),
  type: Yup.string(),
  tags: Yup.string(),
});

const CreateTeam: React.FC = () => {
  return (
    <>
      <Header />
      <div className="create-team-container">
        <div className="card-create-team">
          <div className="card-title-container">
            <span className="section-title">Create your team</span>
            
          </div>
          <div className="section-team-information">
              <span>TEAM INFORMATION</span>
              <Formik
                initialValues={{
                  name: "",
                  description: "",
                  website: "",
                  type: "",
                  tags: "",
                }}
                validationSchema={CreateTeamSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field name="name" />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <Field name="description" />
                    {errors.description && touched.description ? (
                      <div>{errors.description}</div>
                    ) : null}
                    <Field name="website" />
                    {errors.website && touched.website ? (
                      <div>{errors.website}</div>
                    ) : null}
                    <Field name="type" />
                    {errors.type && touched.type ? (
                      <div>{errors.type}</div>
                    ) : null}
                    <Field name="tags" />
                    {errors.tags && touched.tags ? (
                      <div>{errors.tags}</div>
                    ) : null}

                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
        </div>
      </div>
    </>
  );
};

export default CreateTeam;
