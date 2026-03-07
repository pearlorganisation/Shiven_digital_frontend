import{ useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bell,
  Plus
} from 'lucide-react';
import { PlanCard } from '@/components/SubsPlans/PlanCard';
import { PlanForm } from '@/components/SubsPlans/PlanForm';
import { MOCK_PLANS } from '@/components/Helpers/MockPlans';
import type{ SubscriptionPlan } from '@/components/Helpers/types';
import { UserRole } from '@/components/Helpers/types';
import { ConfirmationModal } from '@/components/Helpers/ConfirmationModal';

export default function Plan() {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.ADMIN);
 const [isPlanFormOpen, setIsPlanFormOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<SubscriptionPlan | undefined>();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [planToDelete, setPlanToDelete] = useState<string | null>(null);

  const handlePlanSelect = (plan: SubscriptionPlan) => {
    console.log('Selected plan:', plan);
    alert(`Initiating payment for ${plan.name} plan: ₹${plan.price}`);
  };

    const handleDeleteClick = (id: string) => {
    setPlanToDelete(id);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (planToDelete) {
      console.log('Deleting plan:', planToDelete);
      // In a real app, you'd call an API here
      setPlanToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex">
     {/* Main Content */}
      <main className="flex-1 transition-all duration-300 ">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold text-gray-900 capitalize">Subscription Plans</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-50 rounded-xl relative">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-100"></div>
            <select 
              value={userRole}
              onChange={(e) => setUserRole(e.target.value as UserRole)}
              className="bg-gray-50 border-none rounded-xl px-4 py-2 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={UserRole.ADMIN}>Admin View</option>
              <option value={UserRole.CUSTOMER}>Customer View</option>
            </select>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Subscription Plans</h1>
                <p className="text-gray-500 mt-2">Choose the perfect plan for your business growth.</p>
              </div>
              {userRole === UserRole.ADMIN && (
                <button 
                  onClick={() => { setEditingPlan(undefined); setIsPlanFormOpen(true); }}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 flex items-center"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add New Plan
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_PLANS.map((plan) => (
                <PlanCard 
                  key={plan.id} 
                  plan={plan} 
                  onSelect={handlePlanSelect}
                  onEdit={(p) => { setEditingPlan(p); setIsPlanFormOpen(true); }}
                  onDelete={handleDeleteClick}
                  isCurrent={plan.id === '1'}
                  isAdmin={userRole === UserRole.ADMIN}
                />
                
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Plan Form Modal */}
      <PlanForm 
        isOpen={isPlanFormOpen} 
        onClose={() => setIsPlanFormOpen(false)}
        onSubmit={(data) => {
          console.log('Submitting plan:', data);
          setIsPlanFormOpen(false);
        }}
        initialData={editingPlan}
      />
       <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Plan?"
        message="Are you sure you want to delete this subscription plan? This action cannot be undone and may affect active subscribers."
        confirmText="Delete Plan"
        type="danger"
      />
    </div>
  );
}
