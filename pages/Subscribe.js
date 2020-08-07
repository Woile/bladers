import React from "react";

const Subscribe = () => (
  <form
    action="https://gmail.us17.list-manage.com/subscribe/post?u=6bc18091711d9dcfef285833b&amp;id=06e9cd906a"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    novalidate
    className="grid place-center h-full px-2"
  >
    <div id="mc_embed_signup_scroll" className="text-center m-auto">
      <div>
        <input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Email"
          required
          className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div id="mergeRow-gdpr" className="w-full">
        <div class="content__gdpr">
          <label>Marketing Permissions</label>
          <p>Please select all the ways you would like to hear from us:</p>
          <fieldset name="interestgroup_field">
            <label class="checkbox subfield" for="gdpr_40022">
              <input
                type="checkbox"
                id="gdpr_40022"
                name="gdpr[40022]"
                value="Y"
                checked
              />
              <span>Email</span>{" "}
            </label>
            <label class="checkbox subfield" for="gdpr_40026">
              <input
                type="checkbox"
                id="gdpr_40026"
                name="gdpr[40026]"
                value="Y"
              />
              <span>Direct Mail</span>{" "}
            </label>
          </fieldset>
          <p>
            You can unsubscribe at any time by clicking the link in the footer
            of our emails.
          </p>
          <p>
            We use Mailchimp as our email platform. By clicking below to
            subscribe, you acknowledge that your information will be transferred
            to Mailchimp for processing.{" "}
            <a href="https://mailchimp.com/legal/" target="_blank">
              Learn more about Mailchimp's privacy practices here.
            </a>
          </p>
        </div>
      </div>
      <div id="mce-responses" class="clear">
        <div id="mce-error-response" className="hidden"></div>
        <div id="mce-success-response" className="hidden"></div>
      </div>
      <div className="absolute transform scale-0" aria-hidden="true">
        <input
          type="text"
          name="b_6bc18091711d9dcfef285833b_06e9cd906a"
          tabindex="-1"
          value=""
        />
      </div>
      <div class="clear">
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        />
      </div>
    </div>
  </form>
);

export default Subscribe;
