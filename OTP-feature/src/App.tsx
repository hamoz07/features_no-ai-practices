import OTP from "./components/OTP"

function App() {

  return (
    <>
      <OTP size={4} />
      {/* next session checklist */}
      {/* the paste part */}
      {/* countdown component */}
      {/* try again component */}

{/*
ai response on how to have the pop-up on input without writing code for me so i look it up:
"That built-in browser popup with the little arrow is called HTML5 Constraint Validation 
(often referred to as native form validation bubbles or tooltips), and yes, it is built
 into HTML inputs by default when validation attributes or 
 JavaScript validation APIs are triggered.
"

Core Concepts & APIs

• HTML5 Constraint Validation (the overarching browser feature)
• Constraint Validation API (the JavaScript interface behind it)
• setCustomValidity() (the JavaScript method used to set your own custom popup message)
• reportValidity() (the JavaScript method that forces the browser to immediately show the popup bubble)
• checkValidity() (checks if the input passes rules without showing the popup)
• ValidityState object (the object that tracks why an input failed, such as patternMismatch or typeMismatch)

HTML Attributes That Trigger It Automatically

• pattern attribute (using Regular Expressions directly on an <input> to restrict allowed characters)
• required, minlength, maxlength, min, max (built-in HTML validation rules)
• title attribute (appends your custom helper text to the browser's default error popup when pattern fails)

Events & Styling

• invalid event (fires whenever an input fails validation, allowing you to intercept or customize the popup)
• :invalid and :user-invalid CSS pseudo-classes (for styling the input box itself when the popup triggers)
• novalidate attribute (used on <form> tags when developers want to turn off these default browser popups completely) */}
{/* any ts error */}
    </>
  )
}

export default App
