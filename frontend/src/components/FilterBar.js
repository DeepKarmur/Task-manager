//Enables filtering by status and assignee.

import React from 'react';

const FilterBar = ({ filters, onFilterChange, taskCount, totalTasks }) => {
  const handleFilterChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: value
    });
  };

  const clearFilters = () => {
    onFilterChange({
      status: '',
      assignedTo: ''
    });
  };

  const hasActiveFilters = filters.status || filters.assignedTo;

  return (
    <div className="filter-bar">
      <div className="filter-header">
        <h3>Filter Tasks</h3>
        <div className="task-count">
          Showing {taskCount} of {totalTasks} tasks
        </div>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="status-filter">Filter by Status:</label>
          <select
            id="status-filter"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="assignee-filter">Filter by Assignee:</label>
          <input
            type="text"
            id="assignee-filter"
            value={filters.assignedTo}
            onChange={(e) => handleFilterChange('assignedTo', e.target.value)}
            placeholder="Enter name to filter"
          />
        </div>

        {hasActiveFilters && (
          <button
            className="btn btn-clear-filters"
            onClick={clearFilters}
            title="Clear all filters"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;