
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout title="Dashboard" subtitle="Welcome to your AfriCopilot AI dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Agents</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-600">Currently serving patients</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Calls</h3>
          <p className="text-3xl font-bold text-green-600">1,248</p>
          <p className="text-sm text-gray-600">This month</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction</h3>
          <p className="text-3xl font-bold text-purple-600">98%</p>
          <p className="text-sm text-gray-600">Patient rating</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h4 className="font-medium text-gray-900">Setup New Agent</h4>
            <p className="text-sm text-gray-600">Configure AI assistants</p>
          </button>
          
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h4 className="font-medium text-gray-900">View Analytics</h4>
            <p className="text-sm text-gray-600">Performance insights</p>
          </button>
          
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h4 className="font-medium text-gray-900">Manage Numbers</h4>
            <p className="text-sm text-gray-600">Phone number settings</p>
          </button>
          
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h4 className="font-medium text-gray-900">Call History</h4>
            <p className="text-sm text-gray-600">Review conversations</p>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
