"use client";
import React, { useEffect } from 'react';

const MailingList: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    script.onload = () => {
      (window as any).fnames = ['EMAIL', 'FNAME', 'LNAME', 'ADDRESS', 'PHONE', 'BIRTHDAY'];
      (window as any).ftypes = ['email', 'text', 'text', 'address', 'phone', 'birthday'];
      (window as any).$mcj = (window as any).jQuery.noConflict(true);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="mc_embed_shell" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div id="mc_embed_signup" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <form
          action="https://google.us8.list-manage.com/subscribe/post?u=5eb5b5dd275ceaa9486ea4d89&amp;id=293e3ffd61&amp;f_id=00ee23e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2 className = "text-bold"style={{ marginBottom: '20px' }}>
              Subscribe to iGEM McMaster Mailing List&nbsp;to get the latest updates on workshops, opportunities, and all the exciting things we are working on.
            </h2>
            <div className="indicates-required" style={{ marginBottom: '10px' }}>
              <span className="asterisk" style={{ color: 'red' }}>*</span> indicates required
            </div>
            <div className="mc-field-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="mce-EMAIL" style={{ display: 'block', marginBottom: '5px' }}>
                Email Address <span className="asterisk" style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div className="mc-field-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="mce-FNAME" style={{ display: 'block', marginBottom: '5px' }}>
                First Name <span className="asterisk" style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                name="FNAME"
                className="required text"
                id="mce-FNAME"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div className="mc-field-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="mce-LNAME" style={{ display: 'block', marginBottom: '5px' }}>
                Last Name <span className="asterisk" style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                name="LNAME"
                className="required text"
                id="mce-LNAME"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div hidden>
              <input type="hidden" name="tags" value="4953809" />
            </div>
            <div id="mce-responses" className="clear foot" style={{ marginBottom: '15px' }}>
              <div className="response" id="mce-error-response" style={{ display: 'none', color: 'red' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none', color: 'green' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_5eb5b5dd275ceaa9486ea4d89_293e3ffd61" tabIndex={-1} />
            </div>
            <div className="optionalParent">
              <div className="clear foot" style={{ textAlign: 'center' }}>
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                  style={{ backgroundColor: '#7A003C', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailingList;
