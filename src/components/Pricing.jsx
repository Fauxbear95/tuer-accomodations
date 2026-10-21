import {
  pricingUnits,
  pricingDetails,
} from '../data/pricingData.js';

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <h2 className="pricing-title">PRICING</h2>

        <div className="pricing-panel">
          <div className="pricing-stay">
            <p>
              <strong>Minimum Stay: 30 days</strong>
            </p>

            <p>
              Maximum Stay: 90 days
            </p>
          </div>

          <div className="pricing-unit-list">
            {pricingUnits.map((unit) => (
              <div className="pricing-unit" key={unit.id}>
                <p>
                  {unit.name}: {unit.price} (per month)
                </p>

                <p className="pricing-unit-note">
                  {unit.id === 'upper-unit' ? (
                    <strong>{unit.note}</strong>
                  ) : (
                    <>
                      <strong>Pet fee:</strong>
                      {unit.note.replace('Pet fee:', '')}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="pricing-details">
            {pricingDetails.map((detail, index) => (
              <p
                key={detail}
                className={
                  index === 0
                    ? 'pricing-detail pricing-detail-includes'
                    : 'pricing-detail'
                }
              >
                {index === 2 ? (
                  <>
                    {detail.split('per pet.')[0]}
                    <strong>per pet.</strong>
                    {detail.split('per pet.')[1]}
                  </>
                ) : (
                  detail
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
