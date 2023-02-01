import React from 'react';
import PropTypes from 'prop-types';

export default function ViewOptions({
  disabled,
  renderInPortal,
  setDisabled,
  setRenderInPortal,
  setShowLeadingZeros,
  setShowNeighboringMonth,
  setShowWeekNumbers,
  showLeadingZeros,
  showNeighboringMonth,
  showWeekNumbers,
}) {
  function onDisabledChange(event) {
    const { checked } = event.target;

    setDisabled(checked);
  }

  function onShowLeadingZerosChange(event) {
    const { checked } = event.target;

    setShowLeadingZeros(checked);
  }

  function onShowWeekNumbersChange(event) {
    const { checked } = event.target;

    setShowWeekNumbers(checked);
  }

  function onShowNeighboringMonthChange(event) {
    const { checked } = event.target;

    setShowNeighboringMonth(checked);
  }

  function onRenderInPortalChange(event) {
    const { checked } = event.target;

    setRenderInPortal(checked);
  }

  return (
    <fieldset>
      <legend>View options</legend>

      <div>
        <input checked={disabled} id="disabled" onChange={onDisabledChange} type="checkbox" />
        <label htmlFor="disabled">Disabled</label>
      </div>

      <div>
        <input
          checked={showLeadingZeros}
          id="showLeadingZeros"
          onChange={onShowLeadingZerosChange}
          type="checkbox"
        />
        <label htmlFor="showLeadingZeros">Show leading zeros</label>
      </div>

      <div>
        <input
          checked={showWeekNumbers}
          id="showWeekNumbers"
          onChange={onShowWeekNumbersChange}
          type="checkbox"
        />
        <label htmlFor="showWeekNumbers">Show week numbers</label>
      </div>

      <div>
        <input
          checked={showNeighboringMonth}
          id="showNeighboringMonth"
          onChange={onShowNeighboringMonthChange}
          type="checkbox"
        />
        <label htmlFor="showNeighboringMonth">{"Show neighboring month's days"}</label>
      </div>

      <div>
        <input
          checked={renderInPortal}
          id="renderInPortal"
          onChange={onRenderInPortalChange}
          type="checkbox"
        />
        <label htmlFor="renderInPortal">Render in portal</label>
      </div>
    </fieldset>
  );
}

ViewOptions.propTypes = {
  disabled: PropTypes.bool.isRequired,
  renderInPortal: PropTypes.bool.isRequired,
  setDisabled: PropTypes.func.isRequired,
  setRenderInPortal: PropTypes.func.isRequired,
  setShowLeadingZeros: PropTypes.func.isRequired,
  setShowNeighboringMonth: PropTypes.func.isRequired,
  setShowWeekNumbers: PropTypes.func.isRequired,
  showLeadingZeros: PropTypes.bool.isRequired,
  showNeighboringMonth: PropTypes.bool.isRequired,
  showWeekNumbers: PropTypes.bool.isRequired,
};
