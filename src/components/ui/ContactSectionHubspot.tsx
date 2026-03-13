import { useEffect, useRef } from "react";

const ContactSectionHubspot = () => {
  const hubspotFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hubspotFormRef.current) return;

    // If the HubSpot embed script already ran, we need to manually
    // insert the hs-form-frame div so the MutationObserver picks it up
    const hsDiv = document.createElement("div");
    hsDiv.className = "hs-form-frame";
    hsDiv.setAttribute("data-region", "na1");
    hsDiv.setAttribute("data-form-id", "7ed27e63-1520-4e31-bbea-33c52912e434");
    hsDiv.setAttribute("data-portal-id", "50711976");
    hubspotFormRef.current.innerHTML = "";
    hubspotFormRef.current.appendChild(hsDiv);
  }, []);

  return (
    <section
      id="contacto"
      className="mx-auto w-full max-w-7xl h-full "
    >
      {/* HubSpot Embedded Form */}
      <div className="mx-auto max-w-5xl" ref={hubspotFormRef} />
    </section>
  );
};

export default ContactSectionHubspot;
